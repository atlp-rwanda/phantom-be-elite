/** @format */

import { Pool } from "pg";

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: "7254",
    password: "7254",
    database: "postgres",
});
export default pool;
