const mongoose=require("mongoose");
require("dotenv").config();
const dbConnect=()=>{

    const database=mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("Database Connected")
    }).catch((err)=>{
        console.error(err.message);
    });
}
module.exports=dbConnect;