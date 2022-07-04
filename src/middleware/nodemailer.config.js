import nodemailer from "nodemailer";
import pool from "../Database/database";

// the middleware used to send email to the driver when assingment or unassignment happen to him.
// =============================================================================================
const nodemailerConfigMiddleware = async (req, res, next) => {
  //the default message to be sent declaration
  let notifyingMessage = "";
  let assignMessage = "";
  // destructure the method from request object
  const { method } = req;

  const transporter = nodemailer.createTransport({
    // server used by outlook short mail transport protocol (smtp) is called "hotmail"
    service: "hotmail",
    // the custom user account created at the outlook to act as a sender to any accounts else, either gmail or other.
    //  for testing the functionality of  nodemailer
    auth: {
      user: "phantomu2022@outlook.com",
      pass: "Phantompassword1@",
    },
  });
  //try sending an email using sendMail method on the transporter.
  try {
    if (method === "DELETE") {
      // Find user going to be deleted and parse his information along with the message going to be send on the email
      const wasUser = await pool.query(
        `SELECT * FROM Driver_buse_assign where id = ${req.params.id} `
      );
      const dataToBedeleted = wasUser.rows[0];
      const { plate_number, driver_name } = dataToBedeleted;
      notifyingMessage = `Dear ${driver_name}, <br><br>You are <u> REMOVED to driving </u> a car with plate number: <strong> ${plate_number}. </strong> <br><br>Thank you!`;
      assignMessage = "UNASSIGNMENT";
      // for post capture data submitted and use them to build the message to send in the email of driver as notification.
    } else if (method === "POST") {
      const { plate_number, driver_name } = req.body;
      if (
        plate_number === "" ||
        plate_number === " " ||
        driver_name === "" ||
        driver_name === " "
      ) {
        next();
      }
      notifyingMessage = `Dear ${driver_name}, <br><br>You are <u> ASSIGNED to driving </u> a car with plate number:<strong> ${plate_number}.  </strong> <br><br>Thank you!`;
      assignMessage = "ASSIGNMENT";
    }
    const mailOptions = {
      from: "phantomu2022@outlook.com",
      to: "testphantomapp@gmail.com",
      subject: `Driver ${assignMessage} status`,
      html: notifyingMessage,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Good, It sent!!\nStatus Message: \n" + info.response);
    next();
    // if sending fail for some reason, catch that error.
  } catch (error) {
    res.status(404).json({
      message: "fail to send email on the nodemailer application",
      status: "fail",
    });
  }
};

export default nodemailerConfigMiddleware;
