import express from "express";
import {
  getAllAssigned,
  createAssign,
  deleteAssigned
} from "../Controllers/assign.driver.to.buses.controller";
// import nodemailerConfig from "../middleware/nodemailer.config"

const router = express.Router();

router.get("/", getAllAssigned);
router.post("/", createAssign);
router.delete("/:id", deleteAssigned);

export default router;
