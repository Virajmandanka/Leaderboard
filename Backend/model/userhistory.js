const mongoose=require("mongoose")

const userHistory=new mongoose.Schema({
    userId :{
        
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true
    },
    pointuser:{
        type:Number,
        require:true
    },
    pointat:{
        type:Date,
        default:Date.now
    }

})
const userhistorymodel=mongoose.model("userhistory",userHistory) 
module.exports=userhistorymodel