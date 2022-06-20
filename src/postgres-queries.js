import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "postgres",
  password: "elite",
  port: 5432,
});

const user = {
  name: "sylvain",
  email: "sylvain45",
};

// table schema
// ===================== //
//     CREATE TABLE IF NOT EXISTS "users" (
// 	    "id" SERIAL,
// 	    "name" VARCHAR(100) NOT NULL,
// 	    "email" VARCHAR(15) NOT NULL,
// 	    PRIMARY KEY ("id")
//     );`;

const createUser = (req, res) => {
  const { name, email } = user;

  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log("hey hey it is");
    }
  );
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    console.log("select all data and prints them");
    res.status(200).json(results.rows);
  });
};

module.exports = {
  createUser,
};
