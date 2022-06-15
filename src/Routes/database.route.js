import express from "express";
import { database } from "../controllers/database.controller";

const router = express.Router();

router.get('/user', database);

export default router

