import express from "express";
import { database } from "../controllers/database.controller";

const router = express.Router();

router.get('/', database);

export default router

