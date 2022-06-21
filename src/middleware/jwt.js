/** @format */

import "dotenv/config";
import jwt from "jsonwebtoken";

const private_key = process.env.PRIVATE_KEY;

export const signToken = (payload) => {
	return jwt.sign(payload, private_key);
};
