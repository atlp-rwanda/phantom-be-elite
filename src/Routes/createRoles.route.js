/** @format */

import express from "express";
import { getRole, updateRole } from "../controllers/roles.controller";
import { authadmin } from "../middleware/authorize";


const router = express.Router();

router.get("/:id",authadmin , getRole);
router.put("/update/:id",authadmin , updateRole)

export default router;
