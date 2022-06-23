/** @format */

import express from "express";
import { getUser, updateUser } from "../controllers/user.controller";

const router = express.Router();

router.get("/:id", getUser);
router.put("/update/:id", updateUser);

export default router;