/** @format */

import express from "express";
import { login, logOut } from "../Controllers/Authentication/login.controller";

const router = express.Router();

router.post("/login", login);
router.post("/logout",logOut)
export default router;
