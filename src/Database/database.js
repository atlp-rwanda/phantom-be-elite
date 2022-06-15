import { Client } from "pg";

 const client = new Client({
    host: "localhost",
    user: "postgres",
    port: "5000",
    password: "elite",
    database: "postgres"
})
export default client