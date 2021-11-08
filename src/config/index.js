require('dotenv').config();

const config = {
  env: process.env.NODE_ENV,
  keyJWT: process.env.KEY_JWT,
  dbHost : process.env.DB_HOST,
  dbDatabase : process.env.DB_DATABASE,
  dbUser : process.env.DB_USER,
  dbPort : process.env.DB_PORT,
  dbPassword : process.env.DB_PASSWORD,
  port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 5000,
};

module.exports = config;
