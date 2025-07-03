import express from "express";
import helmet from "helmet";
import cors from "cors";
import { errorMiddleware } from "@/middlewares/error.js";
import morgan from "morgan";
import dotenv from "dotenv";
import { aj } from "./lib/arcjet";
import productRoutes from "@/routes/products";

dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = process.env.PORT || 3000;

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: envMode !== "DEVELOPMENT",
    crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: " * ", credentials: true }));
app.use(morgan("dev"));

app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req, {
      requested: 1,
    });
    if (decision.isDenied()) {
      switch (true) {
        case decision.reason.isRateLimit():
          res.status(429).json({
            error: "Too Many Requests",
          });
          break;
        case decision.reason.isBot():
          res.status(403).json({
            error: "Bot access denied",
          });
          break;
        default:
          res.status(403).json({
            error: "Forbidden",
          });
      }
      return;
    }

    if (
      decision.results.some(
        (result) => result.reason.isBot() && result.reason.isSpoofed()
      )
    ) {
      res.status(403).json({ error: "Spoofed bot detected" });
      return;
    }
    next();
  } catch (e) {
    console.log("Arcjet error", e);
    next(e);
  }
});

app.use("/v1/api/products", productRoutes);

app.use(errorMiddleware);

app.listen(port, () =>
  console.log("Server is working on Port:" + port + " in " + envMode + " Mode.")
);
