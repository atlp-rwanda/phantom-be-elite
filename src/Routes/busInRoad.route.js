import express from "express";
import { postBusInRoad, stopBus, updateBus, getBusInRoad  } from "../Controllers/simulate.bus.controller"
import { authadmin, authoperator, authall, authdriver } from "../middleware/authorize";

const router = express.Router();

router.post("/start", authdriver, postBusInRoad);
router.delete("/stop", authdriver, stopBus);
router.put("/update", authdriver, updateBus);
router.get("/businroad", authdriver, getBusInRoad);
export default router;