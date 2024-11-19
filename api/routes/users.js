import express from "express";

import User from "../models/User.js";
import FinData from "../models/FinData.js";
import Expense from "../models/Expense.js";
// const dotenv = require("dotenv").config();
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import verifyToken from "./validToken.js";
// const bcrypt = require("bcryptjs");

const router = express.Router();

dotenv.config();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);

    const user = await User.findOne({
      where: { username: req.body.username },
      include: [{ model: FinData }, { model: Expense }],
    });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.username }, process.env.JWT_SECRET);
    // const temp = users.filter((user) => user.username === req.body.username);

    // console.log(user);

    console.log(token);
    return res.json(token);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find", verifyToken, async (req, res) => {
  const id = req.body.id;
  console.log(id);
  try {
    const oneuser = await User.findOne({
      where: {
        id: id,
      },
      include: [{ model: FinData }, { model: Expense }],
    });
    console.log(oneuser);
    return res.json(oneuser);
  } catch (err) {
    console.log(err);
  }
});

export default router;
