/** @format */

import "dotenv/config";
import jwt from "jsonwebtoken";
import permissions from "./permissions"

const private_key = process.env.PRIVATE_KEY;

export const signToken = (payload) => {
	return jwt.sign(payload, private_key);
};

export const checkRole = async (req, res, next) =>{
	var jwtToken = req.cookies.token;
	
	if (!token) {
		return res.status(200).send({
            success: false,
            message: "You are not logged in"
        });
	} else if (token) {
		try {
			const data = jwt.verify(token, private_key);
			req.id_number = data.id;
			req.role = data.role;

			const role = data.role

			req.permissions = permissions.role

			return next();
		  } catch {
			return res.status(400).send({
				success: false,
				message: "Invalid token"
			});
		  }
	}
}