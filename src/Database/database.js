/** @format */
require("dotenv").config();
import Sequelize from "sequelize"

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
  ssl: {
  rejectUnauthorized: false
  }
});
console.log(
  `You are running in the ===> ${process.env.NODE_ENV.toUpperCase()} ENVIRONMENT! \nYou are connected to database ===> ${CURRENT_DATABASE}`
);


const sequelize = new Sequelize(CURRENT_DATABASE, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}
);
sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

export default pool;
