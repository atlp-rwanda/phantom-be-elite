/** @format */

import express from "express";
import { logOut } from "../Controllers/Authentication/logout.controller"

const router = express.Router();


router.post("/logout",logOut)
export default router;
