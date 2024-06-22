import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import morgan from "morgan";
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
// routes
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
// Public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
// middleware
import errorhandlermiddleware from "./middleware/errorhandlermiddleware.js";
import { authenticatedUser } from "./middleware/authMiddleware.js";
import cloudinary from "cloudinary";

app.use(cookieParser());
app.use(express.json());
app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./public")));
app.use("/api/v1/jobs", authenticatedUser, jobRouter);
app.use("/api/v1/users", authenticatedUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorhandlermiddleware);

const port = process.env.PORT || 5100;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server running on PORT ${port}...`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  mongoose.connection.close(() => {
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
  });
});
