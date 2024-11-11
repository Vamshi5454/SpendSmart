import React, { useState } from "react";
import "./Login.css";
import Register from "../Register/Register";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="login-container">
      <button className="register" onClick={handleRegister}>
        Register
      </button>
      <form>
        <label>Username</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="lgn-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
