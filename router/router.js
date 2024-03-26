const express=require('express');
const router=express.Router();
const signUp=require("../controllers/signUp");
const logIn=require("../controllers/logIn");
const { auth, isStudent, isAdmin } = require('../middlewares/auth');
router.post("/create",signUp);
router.post("/login",logIn);
router.post("/login/student",auth,isStudent,(req,res)=>{
    res.status(200).json({
        success:true,
        mesage:"student logged"})
});
router.post("/login/admin",auth,isAdmin,(req,res)=>{
    res.status(200).json({
        success:true,
        mesage:"Admin logged"})
});
module.exports=router;