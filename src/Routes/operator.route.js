/** @format */

import express from "express";
import { getAllOperators, createOperator } from "../Controllers/operator.controller";

const router = express.Router();

router.get("/operators", getAllOperators);
router.post("/operators", createOperator);


export default router;