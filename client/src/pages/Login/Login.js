import React, { useState } from "react";
import "./Login.css";
import Register from "../Register/Register";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:3001/auth/login", {
        username: user,
        password: password,
      });

      console.log("cliked login");
      console.log(res.data);
      if (res.data) {
        navigate("/home", { state: { userData: res.data } });
      } else {
        alert("Login failed: " + res.data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("An error occurred during login. Please try again later.");
    }
  };
  return (
    <div className="login-container">
      <button className="register" onClick={handleRegister}>
        Register
      </button>
      <form onSubmit={handleSubmit}>
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

        <button type="submit" className="lgn-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
