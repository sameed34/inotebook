const fetchuser=require('../middleware/fetchUser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
 

const addValidator=[
    body('name','Title cannot be blank').notEmpty(),
    body('email','Enter more then 5 characters').isLength({ min: 5})
   ]
   
const addNotes = async (req,res)=>{
    try {
        const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
        console.log('1')
        const {name, email} = req.body;
        const Note=new Notes({
            name, email, user: req.user.id
        })
        console.log("2");
        const savedNote=await Note.save();
        res.json(savedNote);
        console.log('3')
        
    } catch (error) {
        console.error(error);
        console.log("Error is at end")
    res.status(500).json({ error:error });
    }
}

module.exports={
    addValidator,
    addNotes
}