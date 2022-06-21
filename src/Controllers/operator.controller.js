/** @format */
require("dotenv").config({ path: ".env" })
import pool from "../Database/database";
import bcryptjs from "bcryptjs";
const mg = require('mailgun-js');
const { hash } = bcryptjs;

const mailgun = () =>
    mg({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMIAN,
    });


export const getAllOperators = async(req, res) => {
    const operator = await pool.query(
        `SELECT id,name,email,id_number,permit_id,phone,role FROM public."Users" WHERE role = 'operator' `
    );
    if (!operator.rowCount) {
        return res
            .status(400)
            .send({ success: false, message: `No operator profile found` });
    }
    return res.status(200).send({
        success: true,
        data: operator.rows,
    });
};

export const createOperator = async(req, res) => {
    const randomPassword = Math.random().toString(36).slice(-8);
    const { name, email, password = randomPassword, id_number, permit_id, phone, role = 'operator' } = req.body;
    const passwordHash = await hash(password, 12);
    const operator = await pool.query(
        `SELECT * FROM public."Users" WHERE email LIKE '%${email}%' LIMIT 1`
    );
    if (operator.rowCount) {
        return res
            .status(401)
            .json({ success: false, message: `The operator with email: ${email}, is already registered!` });
    }

    mailgun()
        .messages()
        .send({
                from: 'PHANTOM <ndayisabyesalim54@gmail.com>',
                to: `ndayisabyesalim54@yahoo.com`,
                subject: `Operator verification`,
                html: `
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>Email title</title>
  <style>
    :root {
      color-scheme: light dark;
      supported-color-schemes: light dark;
    }
  </style>
  <style type="text/css">
	#outlook a {padding:0;}
	body[yahoo]{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;}
	.ExternalClass {width:100%;}
	.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}
	table { border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;empty-cells:show; }
	#MessageViewBody { width: 100vw !important; min-width: 100vw !important; padding: 0 !important; margin: 0 !important; zoom: 1 !important; }
	#MessageViewBody a { color: inherit; font-size: inherit; font-family: inherit; font-weight: inherit; line-height: inherit; }
	.faux-absolute{
		max-height:0;
		position:relative;
		opacity:0.999;
		}
		.faux-position{
		margin-top:0;
		margin-left:20%;
		display:inline-block;
		text-align: center;
		}
		body[data-outlook-cycle] .image{
		width:300px;
		}
	</style>
	<style type="text/css">
		@media only screen and (max-width: 414px)  {
			.reset { width: 100% !important; height: auto !important; }
			.hide { display: none !important; }
			.over-mob { max-height:170px !important; }
			.hero-textbox { width: 80% !important;}
			.left { text-align: left !important; }
		}
	</style>
</head>
<body class="body">
  <div role="article" aria-roledescription="email" aria-label="email name" lang="en" style="font-size:1rem; background-color: #E4E4E4; margin-top: 60px; margin-bottom: 5px">
    <!-- email content in here -->
    <table role="presentation" align="center" bgcolor="#E4E4E4" border="0" cellpadding="0" cellspacing="0" width="100%">
<tr><td valign="top">
  <table role="presentation" class="faux-absolute reset" align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="position:relative; opacity:0.999;">
  <tr><td valign="top"><table role="presentation" class="hero-textbox" border="0" cellpadding="0" cellspacing="0" width="80%" bgcolor="#FFFFFE" align="center">&nbsp;<tr><td valign="top" style="padding: 20px;"><h1 style="margin: 0; font-family:sans-serif; font-size:2em; color:#3366CC; mso-line-height-rule: exactly; line-height: 1.5; text-align:center;">PHANTOM APP</h1>
  <br>
  <br>
  <h4 style="margin: 0; font-family:sans-serif; font-size:1.2em; color:black; mso-line-height-rule: exactly; line-height: 1.5; text-align:start;">Hi! ${name},</h4> 
  <br><p class="left" style="margin: 0; font-family:sans-serif; font-size:1em; color:#222222; mso-line-height-rule: exactly; line-height: 1.5; text-align:center;">You are recieving this email because you have been registered as an operator in Phantom eco-system, consider the password below as your default one to be able to sign in into our platform : <em>https://phantom-fe-elite.vercel.app/login</em> </td></tr><tr><td valign="top"><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="80%" align="center"><tr><td height="38" align="center" bgcolor="#3366CC">	<p style = "color:white;font-family:sans-serif; font-size:18px;">${randomPassword}</p></td></tr></table></td></tr><tr><td height="30" style="margin: 0;font-size:0px; mso-line-height-rule: exactly; line-height: 1px; white-space-collapse:collapse; max-height:30px;" valign="top">&nbsp;</td></tr></table></td></tr></table><div style="height: 40px;"></div></td></tr></table></div></body></html>
						`,
            },
            (error, body) => {
                if (error) {
                    return res.status(404).json({ success: false, message: `Email has not been sent Please provide correct email or check your internet, read this: ${error}` })
                } else {
                    pool.query(`INSERT INTO public."Users"  (name,email, password, id_number,permit_id,phone,role) VALUES ($1, $2, $3, $4, $5, $6, $7)  RETURNING *`, [name, email, passwordHash, id_number, permit_id, phone, role],
                        (error, results) => {
                            if (error) {
                                throw error;
                            }
                            return res.status(201).json({ success: true, message: `New driver has been created and email has been sent to: ${results.rows[0].email} for Password.` });
                        });
                }
            }
        );



};