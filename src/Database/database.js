/** @format */
require("dotenv").config();

import { Pool } from "pg";

let CURRENT_DATABASE;

if (process.env.NODE_ENV === "production") {
  CURRENT_DATABASE = process.env.DB_PRODUCTION_NAME;
} else if (process.env.NODE_ENV === "test") {
  CURRENT_DATABASE = process.env.DB_TEST_NAME;
} else {
  CURRENT_DATABASE = process.env.DB_DEVELOPMENT_NAME;
}

const pool = new Pool({
  host: process.env.HOST_FOR_ALL_DB,
  user: process.env.USER_NAME_FOR_ALL_DB,
  port: process.env.PORT_FOR_ALL_DB,
  password: process.env.PASSWORD_FOR_ALL_DB,
  database: CURRENT_DATABASE,
});
console.log(
  `You are running in the ===> ${process.env.NODE_ENV.toUpperCase()} ENVIRONMENT! \nYou are connected to database ===> ${CURRENT_DATABASE}`
);

export default pool;
