
const fs = require('fs');
require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USER_NAME_FOR_ALL_DB,
    password: process.env.PASSWORD_FOR_ALL_DB,
    database: process.env.DB_DEVELOPMENT_NAME,
    host: process.env.HOST_FOR_ALL_DB,
    port: process.env.PORT_FOR_ALL_DB,
    dialect: process.env.DIALECT_FOR_ALL_DB,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: process.env.USER_NAME_FOR_ALL_DB,
    password: process.env.PASSWORD_FOR_ALL_DB,
    database: process.env.DB_TEST_NAME,
    host: process.env.HOST_FOR_ALL_DB,
    port: process.env.PORT_FOR_ALL_DB,
    dialect: process.env.DIALECT_FOR_ALL_DB,
    logging: false,
    protocol: "postgres",
    dialectOptions: {
      bigNumberStrings: true,
      dialectToggle()
    },
  },
  production: {
    username: process.env.USER_NAME_FOR_ALL_DB,
    password: process.env.PASSWORD_FOR_ALL_DB,
    database: process.env.DB_PRODUCTION_NAME,
    host: process.env.HOST_FOR_ALL_DB,
    port: process.env.PORT_FOR_ALL_DB,
    dialect: process.env.DIALECT_FOR_ALL_DB,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};
