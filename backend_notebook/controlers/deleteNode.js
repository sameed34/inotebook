const Notes=require('../models/Notes')
const user=require('./login')

const deltenodeController= async (req,res)=>{
try {
    let Note=await Notes.findById(req.params.id);
    if(!Note){
        return res.status(404).send('Not Found');
    }
    
    if(Note.user.toString() !== req.user.id){
        return res.status(403).send('Not Allowed');

    }
   Note = await Notes.findByIdAndDelete(req.params.id)
res.json({'Succes':'Node is Deleted: ', delted: Note})
} catch (error) {
    console.error(error);
    res.status(500).json({ error:error });
}
}
module.exports={
    deltenodeController
}