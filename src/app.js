/** @format */

import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "../api.json";
import i18n from "./configs/i18n.js";
import profileRouter from "./Routes/updateProfile.route";
import operatorRouter from './Routes/operator.route'
import driverRouter from './Routes/driver.route';
import cors from "cors";

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(i18n.init);
// default route

server.get("/test", (req, res) => {
    res.send("<h1>hello there men and women gents and gentlemen<h1>");
});

server.use(express.json());
server.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc, { explorer: true })
);

server.get("/language-test", (req, res) => {
    res.status(200).json({ success: res.__(true), message: res.__("language") });
});
server.use("/api/v1/", driverRouter);
server.use("/api/v1/", operatorRouter);
server.use("/api/v1/profile", profileRouter);


export default server;