import React, { useState } from "react";
import "./DashBoard.css";

function DashBoard() {
  const [income, setIncome] = useState("");

  const handleIncome = (e) => {
    setIncome(e.target.value);
  };

  return (
    <div>
      <form>
        <label>Income:</label>
        <input
          type="number"
          value={income}
          onChange={handleIncome}
          placeholder="Enter Your Income"
        />
      </form>
    </div>
  );
}

export default DashBoard;
