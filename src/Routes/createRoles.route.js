/** @format */

import express from "express";
import { getRole, updateRole } from "../Controllers/roles.controller";
import { authadmin, authoperator, authall, authdriver } from "../middleware/authorize";


const router = express.Router();

router.get("/:id",authadmin , getRole);
router.put("/update/:id",authadmin , updateRole)

router.get("/roles", authall)

export default router;
