import React, { useState } from "react";
import "./DashBoard.css";

import Expenses from "../Expenses/Expenses";

function DashBoard({ onAddExpense }) {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked submit");
    const allExpenses = {
      expense,
      amount,
    };
    onAddExpense(allExpenses);

    setAmount("");
    setExpense("");
  };
  return (
    <div className="dashboard-container">
      <form onSubmit={handleSubmit} className="dashboard-form">
        <label>Income:</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter Your Income"
        />
        <button className="button">Add Income</button>
        <label for="expense">Expense</label>
        <input
          type="text"
          value={expense}
          id="expense"
          onChange={(e) => setExpense(e.target.value)}
          placeholder="Enter the Expense"
        />
        <label for="amount">Amount Spent</label>
        <input
          type="amount"
          value={amount}
          id="amount"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter the amount spent"
        />
        <button className="button">Add Expense</button>
        <button className="submit" type="submit">
          Calculate
        </button>
      </form>

      {/* <Expenses allExpen={expense} /> */}
    </div>
  );
}

export default DashBoard;
