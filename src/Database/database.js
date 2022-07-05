/** @format */

import { Pool } from "pg";

 const pool = new Pool({
		host: "localhost",
		user: "postgres",
		port: "5000",
		password: "elite",
		database: "postgres",
 });
const createTable = async () => {
	await pool.query(
    "CREATE TABLE IF NOT EXISTS Routes (origin VARCHAR(40), destination VARCHAR(40), description VARCHAR(120), id SERIAL, PRIMARY KEY ( origin, destination ) )"
  );
}
createTable();
export default pool
