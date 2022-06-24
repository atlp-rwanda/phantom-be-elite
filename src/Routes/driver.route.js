/** @format */

import express from "express";
import { getAllDrivers, createDriver } from "../Controllers/driver.controller";

const router = express.Router();

router.get("/drivers", getAllDrivers);
router.post("/drivers", createDriver);


export default router;