import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header.js";
import DashBoard from "./components/DashBoard/DashBoard.js";
import Expenses from "./components/Expenses/Expenses.js";
import ParentComponent from "./components/ParentComponent/ParentComponent.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login/Login.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashBoard" element={<DashBoard />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
