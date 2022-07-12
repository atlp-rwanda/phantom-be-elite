/** @format */
require("dotenv").config();

import { Pool } from "pg";

let CURRENT_DATABASE;

if (process.env.NODE_ENV === "production") {
  CURRENT_DATABASE = process.env.PRODUCTION_URI_DATABASE;
} else if (process.env.NODE_ENV === "test") {
  CURRENT_DATABASE = process.env.TEST_URI_DATABASE;
} else {
  CURRENT_DATABASE = process.env.DEVELOPMENT_URI_DATABASE;
}

const pool = new Pool({
  connectionString: CURRENT_DATABASE,
  // ssl: {
  //   rejectUnauthorized: false
  // }
});
console.log(
  `You are running in the ===> ${process.env.NODE_ENV.toUpperCase()} ENVIRONMENT! \nYou are connected to database ===> ${CURRENT_DATABASE}`
);

export default pool;
