import React, { useState } from "react";
import "./DashBoard.css";
import { useNavigate } from "react-router-dom";

import Expenses from "../Expenses/Expenses";
import axios from "axios";

function DashBoard() {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState(0);
  const [sum, setSum] = useState(0);
  // const [savings, setSavins] = useState(0);
  const navigate = useNavigate();
  console.log(sum);

  const addExpense = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://127.0.0.1:3001/expData/addExpense`, {
        expense,
        amount,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //To add the income ,in this income should be added in the database and also it should calculate the savings
  const handleIncome = async (e) => {
    e.preventDefault();
    console.log("clicked calculate");

    try {
      const response = await axios.get(`http://127.0.0.1:3001/expData/sum`);
      const newSum = response.data; // directly using new sum

      setSum(newSum); // update state for the UI
      // console.log({ income, newSum, id });
      const res = await axios.post(`http://127.0.0.1:3001/findata/addNew`, {
        income,
        sum: newSum,
      });
    } catch (err) {
      console.log(err);
    }

    setIncome("");
    setAmount("");
    setExpense("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://127.0.0.1:3001/auth/find`);
      console.log(res.data);
      if (res.data) {
        navigate("/Expenses", { state: { singleUser: res.data } });
      }
    } catch (err) {
      console.log(err);
    }
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
        <button className="button" onClick={handleIncome}>
          Add Income
        </button>
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
