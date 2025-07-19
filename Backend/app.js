const express=require("express")
const connection=require("./mongu")
const UserRoute=require("./route/userroute")
const cors = require("cors");

const app=express();
app.use(cors());
app.use(express.json());

app.use("/api",UserRoute)


// app.get("/",(req,res)=>{
//     res.send("ram")
    
// })

app.listen(8080,()=>{
    connection();
    console.log("server is running port 8080")
})