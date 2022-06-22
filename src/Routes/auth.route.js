import express from "express";
import { getUser, updateUser } from "../Controllers/forgot.password.controller "
import  resetAuth  from "../middleware/resetPass"

const router = express.Router();

router.post('/password', getUser);
router.put('/resetpassword/:token',resetAuth, updateUser);

export default router