require('dotenv').config();

const config = {
  env: process.env.NODE_ENV,
  keyJWT: process.env.KEY_JWT,
  dbFilename: process.env.DB_FILENAME || '',
  dbTestFilename: process.env.DB_TEST_FILENAME || '',
  port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 5000,
};

module.exports = config;
