import { Sequelize } from "sequelize";

// Configure the database connection
export const sequelize = new Sequelize(
  "mysql://root:12345678@localhost:3306/Finance",
  {
    dialect: "mysql", // Explicitly specifying the dialect is good practice
    logging: false, // Turn off logging; set to console.log for visibility
  }
);

export default sequelize;
