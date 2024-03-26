const express=require('express');
const router=express.Router();
const signUp=require("../controllers/signUp");
const logIn=require("../controllers/logIn");
router.post("/create",signUp);
router.post("/login",logIn);
module.exports=router;