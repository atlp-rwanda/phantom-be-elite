/** @format */

import express from "express";
import {
	getAllBuses,
	getSingleBus,
	createBus,
	updateBus,
	deleteBus,
} from "../Controllers/Bus.controller";

const router = express.Router();

router.get("/", getAllBuses);
router.get("/:id", getSingleBus);
router.post("/", createBus);
router.put("/:id", updateBus);
router.delete("/:id", deleteBus);

export default router;
