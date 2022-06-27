import express from "express";
import { getAllRoutes, getOneRoute, createRoute, updateRoute, deleteRoute } from "../Controllers/routes.crud.controller";

const router = express.Router();

router.get("/", getAllRoutes);
router.get("/:id", getOneRoute);
router.post("/", createRoute);
router.put("/:id", updateRoute);
router.delete("/:id", deleteRoute);

export default router;
