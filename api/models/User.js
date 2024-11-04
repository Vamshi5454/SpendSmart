import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../database.js";

// const { Sequelize, DataTypes } = ("sequelize");
// const sequelize = new Sequelize("mysql://root:12345678@localhost:3306/Finance");

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// module.exports = User;
export default User;
