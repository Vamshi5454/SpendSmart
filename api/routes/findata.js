import express from "express";

import User from "../models/User.js";
import FinData from "../models/FinData.js";

const router = express.Router();

router.post("/addexpense", async (req, res) => {
  try {
    const { Income, Savings, userId } = req.body;
    const findata = await FinData.create({ Income, Savings, userId });
    res.status(200).json(findata);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const alldata = await FinData.findAll();
    console.log(alldata);
    res.json(alldata);
  } catch (err) {
    res.status(400).json(err);
  }
});
export default router;
