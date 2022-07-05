import express from "express";
import { postBusInRoad, stopBus, updateBus, getBusInRoad  } from "../Controllers/simulate.bus.controller"
import { authadmin, authoperator, authall, authdriver } from "../middleware/authorize";

const router = express.Router();

router.post("/", authdriver, postBusInRoad);
router.delete("/", authdriver, stopBus);
router.put("/", authdriver, updateBus);
router.get("/", authdriver, getBusInRoad);
export default router;