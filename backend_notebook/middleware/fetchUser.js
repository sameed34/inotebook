const jwt = require('jsonwebtoken');
const User = require('../models/User');


const fetch=(req,res, next)=>{
try {
    var token=req.header('auth-Token');
    console.log(token)
    if(!token){
        return res.status(401).json({ error: 'Please authenticate using valid tokens' });
    }

    const secret = process.env.JWT_SECRET || 'boii$heavy';
    const data =  jwt.verify(token, secret);
     
    req.user=data.user;
    next(); 

}  
catch (error) {
        console.error(error);
    
        if (error instanceof jwt.JsonWebTokenError) {
            res.status(401).json({ error: 'Invalid token' });
        } else if (error instanceof jwt.TokenExpiredError) {
            res.status(401).json({ error: 'Token has expired' });
        } else if (error instanceof jwt.NotBeforeError) {
            res.status(401).json({ error: 'Token is not yet valid' });
        } else {
            res.status(401).json({ error: 'Please authenticate using valid tokens' });
        }
    }    


}
module.exports=fetch;