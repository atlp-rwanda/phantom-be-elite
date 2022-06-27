import { Pool } from "pg";

 const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: "5432",
    password: "andela123",
    database: "postgres"
})
export default pool
