import express from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "../api.json";
import i18n from './configs/i18n.js';
import databaserouter from "./Routes/database.route"
import signinrouter from "./Routes/signin.route"
import flash from "connect-flash"
import bodyParser from "body-parser"
const server = express();
server.use(i18n.init);
// default route

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

import passport from "passport";
import session from "express-session"

// configuring session
server.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// configuring passport
server.use(flash())
server.use(passport.initialize())
server.use(passport.session())

server.use(function(req, res, next){
  res.locals.message = req.flash('message');
  next();
});

require('./config/passport')(passport);







server.get("/test", (req,res) => {
  res.send("<h1>hello there men and women gents and gentlemen<h1>");
})
    
server.get('/language-test', (req, res) => {
  res.status(200).json({ success: res.__(true) , message: res.__("language")})
});
server.use('/api/v1/', databaserouter)
server.use("/auth/", signinrouter)


server.use(express.json());
server.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc, { explorer: true })
);



export default server;
