const mongoose=require("mongoose")


const userShcema=new mongoose.Schema({
    name:String,
    point:{
        type:Number,
        default:0
    }
})
const usermodel=mongoose.model("user",userShcema)
module.exports=usermodel