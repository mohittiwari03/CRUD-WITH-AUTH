import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import User from "./models/user.js";

import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

//Auth Routes
app.use("/api/auth", authRoutes);

//Post Routes
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("api running...");
});

export default app;
