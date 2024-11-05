import { DataTypes } from "sequelize";

import sequelize from "../database.js";
import User from "./User.js";

const FinData = sequelize.define(
  "FinData",
  {
    Income: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Expense: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // ExpenseAmount: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // Investment: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // InvestmentAmount: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    Savings: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      // Foreign key
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

User.hasMany(FinData, { foreignKey: "userId" });
FinData.belongsTo(User, { foreignKey: "userId" });
export default FinData;
