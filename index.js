const express=require("express");
const dbConnect=require("./config/database");
const router = require("./router/router");
require("dotenv").config();
const app=express();
app.use(express.json());
app.use("/api/user",router);
dbConnect();
app.listen(process.env.PORT||4000,()=>{
    console.log(`server started at port ${process.env.PORT||4000}`);
})