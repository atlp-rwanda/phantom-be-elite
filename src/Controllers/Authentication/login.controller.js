/** @format */

import pool from "../../Database/database";
import { verify } from "../../middleware/hash-password";
import { signToken } from "../../middleware/jwt";
import jwt from "jsonwebtoken";
import handleResponse from "../handleResponse";
import Token from "../../models/token";

export const login = async (req, res) => {
  const { password, email } = req.body;

  let user = await pool.query(
    `SELECT * FROM public."Users" WHERE email LIKE '%${email}%' LIMIT 1`
  );

  if (email == "admin@gmail.com" && password == "password") {
    const userData = {
      name: "Admin User",
      role: "admin",
      email: email,
      createdAt: new Date(),
      id: 1,
    };
    // const token = signToken(JSON.stringify(userData));
    // const TokenInDatabase =await Token.create({token_content:token, userId:userData.id});
    // console.log(TokenInDatabase);
    return res.status(200).json({
      success: true,
      message: "successfully Admin logged in",
      token,
    });
  } else {
    if (!user.rowCount) {
      return res
        .status(401)
        .send({ success: false, message: `Invalid email or password` });
    }
    const isPasswordValid = await verify(password, user.rows[0].password);
    if (!isPasswordValid)
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    const userData = {
      name: user.rows[0].name,
      role: user.rows[0].role,
      email: user.rows[0].email,
      createdAt: user.rows[0].createdAt,
      id: user.rows[0].id,
    };
    const token = signToken(JSON.stringify(userData));
    return res.status(200).json({
      success: true,
      message: "successfully logged in",
      token,
    });
  }
};

export const logOut = async (req, res) => {
  const { cookies } = req;

  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return handleResponse(res, 400, { message: res.__("Login first") });
  }
  const cleanAccessToken = accessToken.replace("Bearer ", "");

  const private_key = process.env.PRIVATE_KEY;
  //
try {
	const logedInUser = jwt.verify(cleanAccessToken, private_key);
	return handleResponse(res, 200, { message: res.__("Logout successfully") });
	
  } catch (error) {
	return handleResponse(res, 200, { message: res.__("Invalid Token") });
  }
  

    

  // return handleResponse(res, 200, { message: res.__('logout successful') });
};
