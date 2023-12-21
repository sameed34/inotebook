const Notes=require('../models/Notes')

const updateController= async (req,res)=>{

const {title, description, tag} = req.body;

const newNote = {};
if ( title ) { newNote.title = title}
if ( description ) { newNote.description = description}
if ( tag ) { newNote.tag = tag}

let note = await Notes.findById(req.params.id);
if(!note) {return res.status(404).send('Not Found')}

if( note.user.toString() !== req.user.id )
{return res.status(404).send('Not Accessible')}
console.log("Run")

note = await Notes.findByIdAndUpdate(req.params.id,{$set: newNote}, {new: true})
res.json({note})

}

module.exports=updateController;