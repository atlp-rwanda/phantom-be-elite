/** @format */

import express from "express";
import { getUser } from "../Controllers/user.controller";
import { updateUser } from "../Controllers/user.controller"
import { deleteUser } from "../Controllers/user.controller"

const router = express.Router();

router.get("/:id", getUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);


export default router;