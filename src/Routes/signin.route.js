import express from "express";
import passport from "passport";


const router = express.Router();

router.post('/signin', (req, res, next) => {
    let user = (req.body.email).toLowerCase()
    let pass = req.body.password
    
    if (req.isAuthenticated()) {
      res.redirect('/signin')
    } else {
        next()
    }
  }, passport.authenticate('signin', {
    successRedirect : '/',  
    failureRedirect : '/signin',
    failureFlash : true
  }))

export default router
