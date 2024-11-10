import React, { useState } from "react";
import DashBoard from "../DashBoard/DashBoard";
import Expenses from "../Expenses/Expenses";

function ParentComponent() {
  // Updated name to start with uppercase letter
  const [expenseData, setExpenseData] = useState([]);

  const handleExpenses = (data) => {
    setExpenseData([...expenseData, data]);
  };

  return (
    <div>
      <DashBoard onAddExpense={handleExpenses} />
      <Expenses expenses={expenseData} />
    </div>
  );
}
export default ParentComponent;
