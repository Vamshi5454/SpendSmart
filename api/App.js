import express from "express";
import sequelize from "./database.js";
import User from "./models/User.js";
import FinData from "./models/FinData.js";
import Expense from "./models/Expense.js";
import users from "./routes/users.js";
import findata from "./routes/findata.js";
const app = express();
const port = 3000;

const initialise = async () => {
  try {
    // Authenticate and sync database
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({});
    console.log("Database synced successfully.");

    // Create a record in the FinData table

    // const user = await User.create({
    //   username: "vamshi2",
    //   email: "vamshi@gmail.com",
    //   password: "vamshi",
    // });

    // const finData = await FinData.create({
    //   Income: 500,
    //   Expense: "water",
    //   ExpenseAmount: 200,
    //   Investment: "Stocks",
    //   InvestmentAmount: 200,
    //   Savings: 500,
    //   userId: 1,
    // });

    // const expense = await Expense.create({
    //   description: "WATER",
    //   Amount: "200",
    //   finDataId: 1,
    // });
    // console.log("FinData created:", Expense.toJSON());
  } catch (error) {
    console.error(
      "Unable to connect to the database or perform operations:",
      error
    );
  }
};

initialise();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

app.use("/auth", users);
app.use("/findata", findata);
