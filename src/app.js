import express from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./api.json";
import databaserouter from "./Routes/database.route"
import  {db}  from "../app/models"

const server = express();
// default route
db.sequelize.sync().then((req) => {
    server.get('/', (req, res) => {
        res.status(200).json({ success: true, message: "Welcome to Phantom API" })
    });
    server.use('/api/v1/', databaserouter)
}).catch((e)=>{
    console.log(e);
})


server.use(express.json());
server.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc, { explorer: true })
);


export default server;