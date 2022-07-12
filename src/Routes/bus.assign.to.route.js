import express from "express";
import {
  getAllAssigned,
  createBusToRoute,
  updateRouteToBus,
  BusOneAssign,
  deleteBusAssign
} from "../Controllers/assign.bus.to.route";

const router = express.Router();

router.get("/", getAllAssigned);
router.post("/", createBusToRoute);
router.put("/:id", updateRouteToBus);
router.get("/:id",  BusOneAssign)
router.delete("/:id", deleteBusAssign);

export default router;