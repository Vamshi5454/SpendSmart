import User from "../models/User.js";
import jwt from "jsonwebtoken";
import FinData from "../models/FinData.js";
import Expense from "../models/Expense.js";

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res
      .status(403)
      .json({ message: "A token is required for authentication" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(token);
    console.log(decoded);
    const user = await User.findOne({
      where: { username: decoded.id },
      //   include: [{ model: FinData }, { model: Expense }],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.body.id = user.id; // Add user to request object

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Invalid Token" });
  }
};

export default verifyToken;
