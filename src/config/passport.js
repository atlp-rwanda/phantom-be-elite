import bcrypt from "bcrypt"
import client from "../Database/database";

var LocalStrategy = require('passport-local').Strategy
import passport from "passport";


let accData = []

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    // ============================================================

    

    // ============================================================

    passport.use('signin', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
        loginUser()
        async function loginUser() {
            client.connect()
            console.log(email)
            try {
                await client.query('BEGIN')

                var accData = await JSON.stringify(client.query('SELECT * FROM "users" WHERE "email"=$1', [email], (err, results) => {
                    if (err) {
                        return done(err)
                    }

                    if (results.rows[0] == null) {
					    return done(null, false)
                    } else {
                        let newpass = results.rows[0].password;
                        // let mypass = bcrypt.decodeBase64(result.rows[0].password, 30)
                       
                        
                        bcrypt.compare(password, newpass, (err, valid) => {
                            if (err) {
                                return done(err)
                            }
                            if (valid) {
                                // console.log('User [' + req.body.email + '] has logged in.')
                                return done(null, results.rows[0])
                            } else {
                                // console.log('erroe from last block', password, results.rows)
                                return done(null, false)
                            }
                        })
                    }
                }))
            }
            catch(e) {
                throw (e)
            }
        }
    }))

    
}