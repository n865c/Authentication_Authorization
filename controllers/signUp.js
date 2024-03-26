const bcrypt=require("bcrypt");
const User=require("../models/user");
const signUp=async(req,res)=>{
try{
    const {name,email,password,role}=req.body;
    if(!name||!email||!password||!role)
    {
        return res.status(401).json({
            success:false,
            mesaage:"Provide all the fields"
        });
    }
    const checkUser=await User.findOne({email});
    if(checkUser)
    {
        return res.status(400).json({
            success:false,
            message:"User email's already exists"
        })
    }
       const encodedPassword=await bcrypt.hash(password,10);
        console.log(encodedPassword);
        const response=await User.create({
            name,email,password:encodedPassword,role
        });
        res.status(200).json({
            success:true,
            data:response,
            message:"signUp successfully",
        })
    
}
catch(err){
    res.status(500).json({
        success:false,
        message:err.mesaage,
    })
}
}
module.exports=signUp;