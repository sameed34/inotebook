const fetchuser = require('../middleware/fetchUser')
const Notes = require('../models/Notes')
const User= require('../models/User')



const notesController=async (req,res)=>{
const notes = await Notes.find({user: req.user.id})
res.json(notes)
}
module.exports=notesController;