import permissions from "./permissions"
const private_key = process.env.PRIVATE_KEY;
import "dotenv/config";
import jwt from "jsonwebtoken";


if (!jwtToken) {
    const checktoken = (req, res) =>{
        res.status(200).send({
            success: false,
            message: "You are not logged in"
        });
    }
    
} else if (jwtToken) {
    try {
        var jwtToken = req.header('token');

        const data = jwt.verify(jwtToken, private_key);
        req.id_number = data.id;
        req.role = data.role;

        req.permissions = permissions.role
        
      } catch {
        const checktoken = (req, res) =>{
            res.status(200).send({
                success: false,
                message: "Invalid token"
            });
        }
      }
}


export const authadmin = async (req, res, next) =>{
    var jwtToken = req.header('token');
    const data = jwt.verify(jwtToken, private_key);

    if (data.role == "admin"){
       return next(); 
    } else {
        return res.status(400).send({
            success: false,
            message: "You don't have permission"
        });
    }
    
}

export const authdriver = async (req, res, next) =>{
    var jwtToken = req.header('token');
    const data = jwt.verify(jwtToken, private_key);

    if (data.role == "driver"){
       return next(); 
    } else {
        return res.status(400).send({
            success: false,
            message: "You don't have permission"
        });
    }
    
}

export const authoperator = async (req, res, next) =>{
    var jwtToken = req.header('token');
    const data = jwt.verify(jwtToken, private_key);

    if (data.role == "operator"){
       return next(); 
    } else {
        return res.status(400).send({
            success: false,
            message: "You don't have permission"
        });
    }
}

export const authall = async (req, res, next) =>{
    var jwtToken = req.header('token');
    const data = jwt.verify(jwtToken, private_key);

    if (data.role == "operator" || data.role == "admin" || data.role == "driver"){
       return next(); 
    } else {
        return res.status(400).send({
            success: false,
            message: "You don't have permission"
        });
    }
}

