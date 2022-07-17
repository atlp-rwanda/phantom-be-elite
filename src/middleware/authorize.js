import permissions from "./permissions"
const private_key = process.env.PRIVATE_KEY;
import "dotenv/config";
import jwt from "jsonwebtoken";

const authadmin = async (req, res, next) =>{
    var jwtToken = req.header('token');
    try {
        const data = await jwt.verify(jwtToken, private_key)
        if (data.role == "admin"){
            next(); 
        } else {
            res.status(400).send({
                success: false,
                message: res.__("noPermission")
            });   
        }
    } catch(err) {
        res.status(400).send({
            success: false,
             message: res.__("TokenInvalid")
        });
    }
}

const authdriver = async (req, res, next) =>{
    var jwtToken = req.header('token');
    try {
        const data = await jwt.verify(jwtToken, private_key)
        if (data.role == "driver"){
            next(); 
        } else {
            res.status(400).send({
                success: false,
                message:res.__("noPermission")
            });   
        }
    } catch(err) {
        res.status(400).send({
            success: false,
            message: res.__("TokenInvalid")
        });
    }
}

const authoperator = async (req, res, next) =>{
    var jwtToken = req.header('token');
    try {
        const data = await jwt.verify(jwtToken, private_key)
        if (data.role == "operator"){
            next(); 
        } else {
            res.status(400).send({
                success: false,
                message:res.__("noPermission")
            });   
        }
    } catch(err) {
        res.status(400).send({
            success: false,
            message: res.__("TokenInvalid")
        });
    }  
}

const authall = async (req, res, next) =>{
    var jwtToken = req.header('token');
    try {
        const data = await jwt.verify(jwtToken, private_key)
        if (data.role == "operator" || data.role == "admin" || data.role == "driver"){
            next(); 
        } else {
            res.status(400).send({
                success: false,
                message:res.__("noPermission")
            });   
        }
    } catch(err) {
        res.status(400).send({
            success: false,
            message: res.__("TokenInvalid")
        });
    }
}

module.exports = {authdriver, authoperator, authall, authadmin}

