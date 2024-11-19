import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://127.0.0.1:3001/auth/register`, {
        username,
        email,
        password,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label> Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
        <button className="login" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Register;
