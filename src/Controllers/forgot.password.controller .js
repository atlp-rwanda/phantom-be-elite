import pool from "../Database/database"
import nodemailer from "nodemailer";
import "dotenv/config"
import jwt from 'jsonwebtoken'


const transporter = nodemailer.createTransport({
   service: "gmail",
   host: process.env.TRANSPORTER_HOST,
   port: process.env.TRANSPORTER_PORT,
   secure: process.env.SECURE,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_EMAIL_PASSWORD,
    },
})


export const getUser = async (req, res) => {
	const { email } = req.body;
    const resetToken = jwt.sign({email}, process.env.RESET_PASSWORD_SECRET, {
        expiresIn : process.env.RESET_EXPIRE_TIME
    })
    let details = {
        from : process.env.USER_EMAIL,
        to : email,
        subject : "reset your password",
        html : `<h1>Please find below the link to reset your password</h1>
               <p>${process.env.CLIENT_URL}/api/v1/resetpassword/${resetToken}</p>`
    }
	const user = await pool.query(
		`SELECT * FROM public."Users" WHERE email LIKE '%${email}%' `
	);
	if (!user.rowCount) {
		return res
			.status(400)
			.send({ success: false, message: `No user profile found` });
	}else{
        transporter.sendMail(details,(err) =>{
            if(err){
                console.log(err)
            }
        })
        res.status(200).json({
            message : "email have been sent"
        })
    }
};



export const updateUser = async (req, res) => {
const { email } = req.body;
const { password, confirmPassword } = req.body
if (password !== confirmPassword) {
    return res.status(401).json({
      message: "password does not match"
    })
}else{
const user = await pool.query(
    `SELECT * FROM public."Users" WHERE email LIKE '%${email}%'  `
);
if (!user.rowCount) {
    return res
        .status(400)
        .send({ success: false, message: `No user found` });
} else {
    const updates = await pool.query(
        `UPDATE public."Users" SET password=$1 WHERE email LIKE '%${email}%'`,
        [password]
    );
    if (!updates.rowCount) {
        return res
            .status(400)
            .send({ success: false, message: `Something went wrong` });
    }
    return res.status(200).send({
        success: true,
        message: `Profile Updated Successfully`,
    });
  }
}
}