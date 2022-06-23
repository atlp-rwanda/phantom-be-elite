/** @format */

import express from "express";
import { login } from "../controllers/Authentication/login.controller";

const router = express.Router();

router.post("/login", login);

export default router;
