import express from "express";
import Rat from "../models/ratModel.js";

const router = express.Router();

// ดึงข้อมูลหนูทดลองทั้งหมด
router.get("/", async (req, res) => {
  try {
    const rats = await Rat.find();
    res.json(rats);
  } catch (error) {
    res.status(500).json({ message: "Error fetching rats" });
  }
});

export default router;
