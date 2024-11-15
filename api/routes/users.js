import express from "express";

import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);

    const user = await User.findOne({ where: { username: req.body.username } });
    // const temp = users.filter((user) => user.username === req.body.username);

    console.log(user);

    return res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
