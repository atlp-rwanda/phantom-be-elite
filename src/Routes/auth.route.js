import express from "express";
import { getUser, updateUser } from "../Controllers/forgot.password.controller "

const router = express.Router();

router.post('/password', getUser);
router.put('/resetpassword', updateUser);

export default router