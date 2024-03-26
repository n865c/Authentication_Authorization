const jwt=require("jsonwebtoken")
require('dotenv').config();
exports.auth=(req,res,next)=>{
    try{
    const {token}=req.body;
    const decode=jwt.verify(token,process.env.jwt_secret);
    console.log(decode);
    if(!decode)
    return res.status(500).json({
        success:false,
        message:"user is not verified"
    })
    req.user=decode;
    next();
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
exports.isStudent=(req,res,next)=>{
    try{
    const {user}=req;
    if(user.role!=="Student")
    return res.status(500).json({
success:false,
data:"something worng"})
next();
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message});
    }
}
exports.isAdmin=(req,res,next)=>{
    try{
    const {user}=req;
    if(user.role!=="Admin")
    return res.status(500).json({
success:false,
data:"something worng"})
next();
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message});
    }
}
