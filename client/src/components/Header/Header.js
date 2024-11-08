import React from "react";
import "../Header/Header.css";

function Header() {
  // const  handleLogOut=()=>{
  //    route to Home page
  // }

  return (
    <div className="header">
      <div>
        <h1>Spend Smart</h1>
        <p>Track and Control your Expense</p>
      </div>
      <button>Log Out</button>
    </div>
  );
}

export default Header;
