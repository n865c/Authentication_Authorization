const express=require("express");
require("dotenv").config();
const app=express();
app.listen(process.env.PORT||4000,()=>{
    console.log(`server started at port ${process.env.PORT||4000}`);
})