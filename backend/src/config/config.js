const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    dialect: "mysql",
  },

  server: {
    port: Number(process.env.PORT) || 5001,
  },

  jwt: {
    secret: process.env.JWT_SECRET,
  },

  llm: {
    gemini: process.env.GEMINI_API_KEY,
    openRouter: process.env.OPENROUTER_API_KEY,
  },
};
