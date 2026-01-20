const { Sequelize } = require("sequelize");
const config = require("../config/config");


console.log("DB ENV CHECK =>", {
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_DATABASE: process.env.DB_DATABASE,
});

console.log("DB USER CHECK =>", process.env.DB_USER);


const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URL, {
  dialect: "mysql",
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});


module.exports = sequelize;
