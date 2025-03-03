import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// 📌 เสิร์ฟไฟล์ `favicon.ico`
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

// ✅ เสริม API route ทดสอบ
app.get("/", (req, res) => {
  res.send("Hello from Server!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
