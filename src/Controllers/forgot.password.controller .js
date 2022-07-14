import pool from "../Database/database"
import nodemailer from "nodemailer";
import "dotenv/config"


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
	const user = await pool.query(
		`SELECT * FROM public."Users" WHERE email LIKE '%${email}%' `
	);
	if (!user.rowCount) {
		return res
			.status(400)
			.send({ success: false, message: res.__("NoUserProfile") });
	}else{
        transporter.sendMail({
        from : process.env.USER_EMAIL,
        to : email,
        subject : "reset your password",
        html : `<h1>Please find below the link to reset your password</h1>
               <p>${process.env.CLIENT_URL}/api/v1/resetpassword</p>`
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
    return res.status(400).json({
        message: res.__("Password")
    })
}else{
const user = await pool.query(
    `SELECT * FROM public."Users" WHERE email LIKE '%${email}%'  `
);
if (!user.rowCount) {
    return res
        .status(400)
        .send({ success: false, message: res.__("NoUserProfile")});
} else {
    const updates = await pool.query(
        `UPDATE public."Users" SET password=$1 WHERE email LIKE '%${email}%'`,
        [password]
    );
    return res.status(200).send({
        success: true,
        message: res.__("UpdatedPass"),
    });
  }
}
}