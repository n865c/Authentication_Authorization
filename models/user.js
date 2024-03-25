const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
     type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    role:{
        type: String,
        enum:["Admin","Student","Vistor"]
    }
});
module.exports=mongoose.model('User',userSchema);