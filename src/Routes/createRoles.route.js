/** @format */

import express from "express";
import { getRole, updateRole } from "../controllers/roles.controller";
import { checkRole } from "./middleware/jwt";


const router = express.Router();

router.get("/:id", getRole);
router.put("/update/role/:id",checkRole, updateRole)

export default router;
