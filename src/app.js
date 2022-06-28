/** @format */

import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "../api.json";
import i18n from "./configs/i18n.js";
import profileRouter from "./Routes/updateProfile.route";
import operatorRouter from './Routes/operator.route'
import driverRouter from './Routes/driver.route';
import signInRouter from "./Routes/signin.route";
import logOutRouter from "./routes/logout.route"
import routesCrudRouter from "./Routes/routes.route"
import assignedRouter from "./Routes/driver.bus.assign.route"
import busRouter from "./Routes/bus.route";
import cors from "cors";
import authroutes from "./Routes/auth.route"

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(i18n.init);
// default route

server.get("/test", (req, res) => {
    res.send("<h1>hello there men and women gents and gentlemen<h1>");
})

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
server.use("/api/v1/auth", signInRouter);
server.use("/api/v1/auth", logOutRouter);
server.use("/api/v1/route", routesCrudRouter);
server.use("/api/v1/assign", assignedRouter);

server.use("/api/v1/bus", busRouter);
server.use('/api/v1', authroutes)
export default server;