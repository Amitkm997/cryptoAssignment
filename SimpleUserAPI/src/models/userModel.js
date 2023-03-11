
const { default: mongoose } = require("mongoose");

const userModel=new mongoose.Schema({
    gender:{
        type:String,
        enum:['male','female']
    }, 
        dob:String, 
        city:String, 
        state:String,
        pincode:String,
 },{timestamps:true});
 
 module.exports=mongoose.model("Current",userModel);