import express from "express";
import { getBusInfo } from "../Controllers/bus-info.controller";

const router = express.Router();

router.get("/bus-info", getBusInfo);

export default router;