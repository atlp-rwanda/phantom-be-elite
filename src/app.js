import express from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "../api.json";
import i18n from './configs/i18n.js';
import databaserouter from "./Routes/database.route"

const server = express();
server.use(i18n.init);
// default route

    server.get('/', (req, res) => {
        res.status(200).json({ success:  res.__(true) , message: res.__("welcome")})
    });
    
    server.get('/language-test', (req, res) => {
      res.status(200).json({ success: res.__(true) , message: res.__("language")})
    });
    server.use('/api/v1/', databaserouter)


server.use(express.json());
server.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc, { explorer: true })
);



export default server;