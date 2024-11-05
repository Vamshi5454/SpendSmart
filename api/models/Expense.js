import { DataTypes } from "sequelize";
import sequelize from "../database.js";
import FinData from "./FinData.js";

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
        model: FinData,
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

FinData.hasMany(Expense, { foreignKey: "finDataId" });
Expense.belongsTo(FinData, { foreignKey: "finDataId" });

export default Expense;
