import { DataTypes } from "sequelize";
import sequelize from "../database.js";
import FinData from "./FinData.js";
import User from "./User.js";

const Expense = sequelize.define(
  "Expense",
  {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    finDataId: {
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

User.hasMany(Expense, { foreignKey: "userId" });
Expense.belongsTo(User, { foreignKey: "userId" });

export default Expense;
