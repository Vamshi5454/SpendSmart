import React, { useState } from "react";
import "./DashBoard.css";

import Expenses from "../Expenses/Expenses";
import axios from "axios";

function DashBoard({ id }) {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState(0);
  const [sum, setSum] = useState(0);

  const addExpense = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://127.0.0.1:3001/expData/addExpense`, {
        expense,
        amount,
        id,
      });
    } catch (err) {
      console.log(err);
    }

    try {
      const temp = await axios.get(`http://127.0.0.1:3001/expData/sum`);
      console.log(temp);
      setSum(temp);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked submit");
    // const allExpenses = {
    //   expense,
    //   amount,
    // };

    try {
      const res = await axios.post(`http://127.0.0.1:3001/findata/addexpense`, {
        income,
        // savings,
        sum,
      });
    } catch (err) {
      console.log(err);
    }

    // onAddExpense(allExpenses);

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
        <button className="button" onClick={addExpense}>
          Add Expense
        </button>
        <button className="submit" type="submit">
          Calculate
        </button>
      </form>

      {/* <Expenses allExpen={expense} /> */}
    </div>
  );
}

export default DashBoard;
