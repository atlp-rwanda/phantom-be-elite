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
                message: "You don't have permission"
            });   
        }
    } catch(err) {
        res.status(400).send({
            success: false,
            message: "Invalid token"
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
                message: "You don't have permission"
            });   
        }
    } catch(err) {
        res.status(400).send({
            success: false,
            message: "Invalid token"
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
                message: "You don't have permission"
            });   
        }
    } catch(err) {
        res.status(400).send({
            success: false,
            message: "Invalid token"
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
                message: "You don't have permission"
            });   
        }
    } catch(err) {
        res.status(400).send({
            success: false,
            message: "Invalid token"
        });
    }
}

module.exports = {authdriver, authoperator, authall, authadmin}

