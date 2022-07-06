/** @format */

import express from "express";
import { getUser } from "../controllers/user.controller";
import { updateUser } from "../Controllers/user.controller"

const router = express.Router();

router.get("/:id", getUser);
router.put("/update/:id", updateUser);

export default router;