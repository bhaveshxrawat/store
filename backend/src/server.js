import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import productRoutes from "./routes/productRoutes.js"
import { sql } from "./config/db.js";
import { aj } from "./lib/arcjet.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()

app.use(express.json())
app.use(cors())
app.use(helmet({
  contentSecurityPolicy: false
})) //security middleware for setting http headers
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  })
}

async function initDB() {
  try {
    await sql`CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
    console.log('Products table initialized');
  } catch (error) {
    console.error('Database initialization error:', error);
    process.exit(1); // Exit if database connection fails
  }
}

initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Server startup failed:', error);
    process.exit(1);
  });