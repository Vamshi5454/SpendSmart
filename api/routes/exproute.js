import express from "express";
import Expense from "../models/Expense.js";
import { json } from "sequelize";

const router = express.Router();

router.post("/addExpense", async (req, res) => {
  try {
    // const { description, Amount, finDataId } = req.body;
    const { expense, amount, id } = req.body;
    console.log(expense, amount, id);
    const expenseData = Expense.create({
      description: expense,
      Amount: amount,
      finDataId: id,
    });

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

router.get("/sum", async (req, res) => {
  try {
    const allExpenses = await Expense.findAll();
    // res.json(allExpenses);
    let sum = 0;

    allExpenses.map((item) => (sum = item.Amount + sum));

    return res.json(sum);
    // console.log(sum);
  } catch (err) {
    res.status(400).json(err);
  }
});

export default router;
