// import React, { useState } from "react";

// function Expenses({ expenses }) {
//   console.log(expenses);
//   return (
//     <div>
//       These are the expenses
//       {/* {expenses[0]} */}
//       {expenses.map((item, index) => {
//         <div key={index}>
//           {/* <p>Expense:{item[0].expense}</p> */}
//           <p>Amount: {item.amount}</p>
//         </div>;
//       })}
//     </div>
//   );
// }

// export default Expenses;

import React from "react";

function Expenses({ expenses }) {
  console.log(expenses);
  return (
    <div>
      These are the expenses
      {expenses.map((item, index) => (
        <li key={index}>
          <p>Expense: {item.expense}</p>
          <p>Amount: {item.amount}</p>
        </li>
      ))}
    </div>
  );
}

export default Expenses;
