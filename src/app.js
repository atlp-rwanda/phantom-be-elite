import express from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./api.json";


const server = express();

// default route
server.get('/', (req, res) => {
    res.status(200).json({ success: true, message: "Welcome to Phantom API" })
});

server.use(express.json());
server.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc, { explorer: true })
);


export default server;