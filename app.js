import express from "express";
import userRouter from "./router/user.js";
import taskRouter from "./router/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/err.js";
import cors from "cors";

export const app = express();

config({
  path: "./data/config.env",
});

//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL || "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/userid", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Nice working");
});

//using error middleware
app.use(errorMiddleware);
