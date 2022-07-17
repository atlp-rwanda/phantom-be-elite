import express from "express";
import { postBusInRoad, stopBus, updateBus, getBusInRoad  } from "../Controllers/simulate.bus.controller"
import { authadmin, authoperator, authall, authdriver } from "../middleware/authorize";

const router = express.Router();

router.post("/start",postBusInRoad);
router.delete("/stop",stopBus);
router.put("/update",updateBus);
router.get("/businroad",getBusInRoad);
export default router;