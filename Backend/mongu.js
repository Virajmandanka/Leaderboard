const mongoose=require("mongoose")

const connection= async () =>{
    try {
         await mongoose.connect("mongodb+srv://viraj:ram@leaderboard.4u5tuh8.mongodb.net/?retryWrites=true&w=majority&appName=leaderboard")
    console.log("MongoDb connect")
        
    } catch (error) {
        console.log("MongoDb connect field",error.message)
    }
   
}
module.exports=connection