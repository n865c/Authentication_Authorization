const user=require("../models/user");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();
const logIn=async(req,res)=>{
    try{
    const {email,password}=req.body;
    if(!email||!password){
        return res.status(401).json({
            success:false,
            message:"please give all detail"
        })
    }
    try{
    const checkUser=await user.findOne({email});
    if(!checkUser)
    return res.status(400).json({
            success:false,
            message:"User never signed..."
})
     const decode=bcrypt.compare(checkUser.password,password);
     if(!decode)
     return res.status(400).json({
        success:false,
        message:"Password is wrong",
        error:err.message
    })
     const payload={
        email:checkUser.email,
        password:checkUser.password,
        role:checkUser.role
     }
     const token=jwt.sign(payload,process.env.jwt_secret,
        
        {
            expiresIn:"2h"
        });
     console.log(token)
     const userWithToken = {
        ...checkUser.toObject(),
        token: token
    };
    delete userWithToken.password;
    res.cookie("token",token,{
        httpOnly:true,
        maxAge: 1000 * 60 * 15,
    })
     res.status(200).json({
        success:true,
        data:userWithToken,
        message:"Token generated"
     })

}catch(err)
{
    res.status(400).json({
        success:false,
        message:"jwt is not signed",
        error:err.message
    })
}
    
}
catch(err)
{
    res.status(500).json({
       success:false,
       error:err.message
    })
}

}
module.exports=logIn;