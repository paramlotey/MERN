const jwt = require('jsonwebtoken')
const Admin = require("../model/adminSchema")

const Autheticate = async (req,res,next)=>{
    try{
        const token =req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

        const rootAdmin = await Admin.findOne({_id:verifyToken._id,"tokens.token":token});

        if(!rootAdmin){
            throw new Error('User Not Found')
        }
        req.token= token;
        req.rootAdmin=rootAdmin;
        req.adminID=rootAdmin._id;
        next()

    }
    catch(err){
        res.status(401).send("Unauthorized:No token Provided")
        console.log(err)
    }
}

module.exports = Autheticate;