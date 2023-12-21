const jwt = require('jsonwebtoken');
const User = require('../models/User');
const fetchuser = require('../middleware/fetchUser');


const getUserControl=  async (req,res)=>{
    try {
        var userId= await req.user.id ;
        const user= await User.findById(userId).select('-password');
        res.send(user);
        
    } catch (error) {
        console.error(error);
    res.status(500).json({ error:error });
    }
}
module.exports = {
    getUserControl
}