import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js"
import { sql } from "./config/db.js";
import { aj } from "./lib/arcjet.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(helmet()) //security middleware for setting http headers
app.use(morgan("dev")) //log the requests

// apply arcjet rate-limit to all route
app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req, {
      requested: 1
    })
    if (decision.isDenied()) {
      switch (true) {
        case decision.reason.isRateLimit():
          res.status(429).json({
            error: "Too Many Requests"
          });
          break;
        case decision.reason.isBot():
          res.status(403).json({
            error: "Bot access denied"
          });
          break;
        default:
          res.status(403).json({
            error: "Forbidden"
          });
      }
      return;
    }

    if (decision.results.some((result) => result.reason.isBot() && result.reason.isSpoofed())) {
      res.status(403).json({ error: "Spoofed bot detected" });
      return;
    }
    next()
  }
  catch (e) {
    console.log("Arcjet error", e);
    next(error)
  }
})

app.use("/api/products", productRoutes)

async function initDB() {
  try {
    await sql`CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

initDB().then(() => app.listen(PORT))