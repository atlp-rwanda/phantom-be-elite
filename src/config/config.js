
const fs = require('fs');
require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USER_NAME_FOR_DEVELOPMENT,
    password: process.env.PASSWORD_FOR_DEVELOPMENT,
    database: process.env.DB_DEVELOPMENT_NAME,
    host: process.env.HOST_FOR_DEVELOPMENT,
    port: process.env.PORT_FOR_DEVELOPMENT,
    url: process.env.DEVELOPMENT_URI_DATABASE,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: process.env.USER_NAME_FOR_TEST,
    password: process.env.PASSWORD_FOR_TEST,
    database: process.env.DB_TEST_NAME,
    host: process.env.HOST_FOR_TEST,
    port: process.env.PORT_FOR_TEST,
    url: process.env.TEST_URI_DATABASE,
    dialect: 'postgres',
    logging: false,
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  },
  production: {
    username: process.env.USER_NAME_FOR_PRODUCTION,
    password: process.env.PASSWORD_FOR_PRODUCTION,
    database: process.env.DB_PRODUCTION_NAME,
    host: process.env.HOST_FOR_PRODUCTION,
    port: process.env.PORT_FOR_PRODUCTION,
    url: process.env.PRODUCTION_URI_DATABASE,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  },
};
