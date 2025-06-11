import express from "express";
import helmet from "helmet";
import cors from "cors";
import { errorMiddleware } from "@/middlewares/error.js";
import morgan from "morgan";
import dotenv from "dotenv";
import { prisma } from "./lib/prisma";

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

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// app.get("/api/new-user", async (req, res, next) => {
//   const product = await prisma.product.create({
//     data: {
//       name: "Vim Bar",
//       imageUrl: "img.jpg",
//       price: 50,
//     },
//   });
//   res.status(200).json({
//     data: product,
//   });
// });
// your routes here

app.get("/{*any}", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

app.use(errorMiddleware);

app.listen(port, () =>
  console.log("Server is working on Port:" + port + " in " + envMode + " Mode.")
);
