import express from "express";
import sequelize from "./database.js"; // import your sequelize instance
import User from "./models/User.js"; // import your User model

const app = express();
const port = 3000;

const intialise = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
      return sequelize.sync(); // Sync all models including User
    })
    .then(() => {
      //   console.log(x);
      console.log("Database synced successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
  User.create({
    username: "vamshi2",
    email: "vamshhi@gmail.com",
    password: "vamshi2",
  });
};
intialise();
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
