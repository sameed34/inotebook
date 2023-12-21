
const User= require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const authValidator=[
  body('name','Enter a valid name').isLength({min: 3}),
  body('email','Enter a valid Email').isEmail(),
  body('password','Enter a valid password').isLength({min: 5})
 ]
 const secret={
   secret: 'boii$heavy'
  
 }

 const authController = async (req, res) => {
  try {

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    const copy=await User.findOne({email: req.body.email});
    if(copy){
      return res.status(400).json({error: 'Sorry User with this email already exists'})
    }
    const  salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
      
    });
    const secret = process.env.JWT_SECRET || 'boii$heavy';
    const data={
      user: {
          id: user.id 
      }
    }
    console.log(data)
    const authToken = jwt.sign(data,secret);
    res.json({authToken});

  } catch (error) {
    console.error(error);
    res.status(500).json({ error:error });
  }
};

module.exports = {
  authController,
  authValidator,
  secret
};
