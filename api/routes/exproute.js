import express from "express";
import Expense from "../models/Expense.js";
import { json } from "sequelize";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { description, Amount, finDataId } = req.body;
    const expenseData = Expense.create({ description, Amount, finDataId });
    res.status(200).json(expenseData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/allData", async (req, res) => {
  try {
    const allExpenses = await Expense.findAll();
    res.json(allExpenses);
  } catch (err) {
    res.status(400).json(err);
  }
});

export default router;
