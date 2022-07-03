import express from "express";
import {
  getAllAssigned,
  createBusToRoute,
  updateRouteToBus
} from "../Controllers/assign.bus.to.route";

const router = express.Router();

router.get("/", getAllAssigned);
router.post("/", createBusToRoute);
router.put("/:id", updateRouteToBus);
// router.delete("/:id", deleteAssigned);

export default router;