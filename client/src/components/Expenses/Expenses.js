// import React from "react";
// import { useLocation } from "react-router-dom";

// function Expenses() {
//   const location = useLocation();
//   const { singleUser } = location.state || {};
//   console.log("i am in the expenses");
//   console.log(location);
//   console.log(singleUser);
//   return (
//     <div>
//       <p>Hi {singleUser.usename} These are your Expenses</p>
//       {singleUser.Expenses.map((item) => (
//         <div key={item.id}>
//           <p>{item.description}</p>
//           <p>{item.Amount}</p>
//         </div>
//       ))}

//       {/* <p>Your total Expenses are </p> */}
//     </div>
//   );
// }

// export default Expenses;

import React from "react";
import { useLocation } from "react-router-dom";
import "./Expenses.css";

function Expenses() {
  const location = useLocation();
  const { singleUser } = location.state || {};
  return (
    <div className="expenses-container">
      <p className="expense-header">
        Hi {singleUser?.username}, These are your Expenses:
      </p>
      {singleUser?.Expenses.map((item) => (
        <div className="expense-item" key={item.id}>
          <p className="expense-description">{item.description}</p>
          <p className="expense-amount">${item.Amount}</p>
        </div>
      ))}
    </div>
  );
}

export default Expenses;
