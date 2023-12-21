const User=require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const { authController } = require('./auth');

const loginValidator=[
    body('email','Enter a valid Email').isEmail(),
    body('password','Enter a valid password').isLength({min: 5})
   ]

   const loginController= async (req,res)=>{
    let success=true;
       const result = validationResult(req);
       console.log(result);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    const {email,password} = req.body;
    try {
        var user= await User.findOne({email});
        if(!user){
          success=false;
      return res.status(400).json({ errors: "Please try to login with correct credentials" });
        }
        var comPassword = await bcrypt.compare(password,user.password)
        if(!comPassword){
          success=false;

      return res.status(400).json({ errors: "Please try to login with correct credentials" });
        }
        const secret='boii$heavy';
        console.log("1")
        
        const data={
            user: {
                id: user.id 
            }
          }
          const token = jwt.sign(data,secret);
          res.send(token);
          console.log("sent")

        } catch (error) {
          console.error(error);
          res.status(500).json({ error:error });
    }
   }

   module.exports={
    loginController,
    loginValidator
   };