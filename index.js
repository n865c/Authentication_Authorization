const express=require("express");
const dbConnect=require("./config/database");
require("dotenv").config();
const app=express();
dbConnect();
app.listen(process.env.PORT||4000,()=>{
    console.log(`server started at port ${process.env.PORT||4000}`);
})