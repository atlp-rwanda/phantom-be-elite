import express from "express";
import { postBusInRoad, stopBus, updateBus, getBusInRoad  } from "../Controllers/simulate.bus.controller"

const router = express.Router();

router.post("/", postBusInRoad);
router.delete("/", stopBus);
router.put("/", updateBus);
router.get("/", getBusInRoad);
export default router;