
import jwt from "jsonwebtoken";

export const logOut = async (req, res) => {

    const accessToken = req.headers.authorization;
    
    if (!accessToken) {
      return res.status(400).json({
        success: false,
        message: res.__("Login first"),
      });
    }
    const cleanAccessToken = accessToken.replace("Bearer ", "");
    const private_key = process.env.PRIVATE_KEY;
  try {
      const logedInUser = jwt.verify(cleanAccessToken, private_key);
    return res.status(200).json({
      success: true,
      message: res.__("Logout successfully"), 
    });
    } catch (error) {
   return res.status(401).json({
      success: false,
      message:res.__("Invalid Token") , 
    });
    }
  };