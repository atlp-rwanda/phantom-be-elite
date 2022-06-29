import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "andela123",
  port: 5432,
});

const user = {
  name: "sylvain",
  email: "sylvain45",
};

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

export default {
  createUser,
};
