const express=require("express")
const userModel=require("../model/useShc")
const userHistory=require("../model/userhistory")


const UserRoute=express.Router();

UserRoute.post("/adduser",async(req,res)=>{

    try {

    const {name} = req.body
    const user =new userModel({name})

    await user.save();

      res.status(201).json(user);
        
    } catch (error) {

          res.status(500).json({ error: err.message });
        
    }
   
})

UserRoute.post("/user/:userId",async(req,res)=>{
    try {

        const {userId}=req.params
        const points=Math.floor(Math.random()*10)+1;

        const user=await userModel.findById(userId)
        if (!user) return res.status(404).json({ error: "User not found" });

           user.point += points;
           await user.save();


           const history=new userHistory({
             userId,
             pointrus:points
           })
           await history.save();

          res.json({ message: "Points claimed", points });
    } catch (error) {

         res.status(500).json({ error: err.message });

    }
})

UserRoute.get("/leaderbord",async(req,res)=>{

    try {
         const users= await userModel.find().sort({ point: -1})
         
         const ranked = users.map((u, i) => ({
           name: u.name,
           point: u.point,
           rank: i + 1
    }));
      res.json(ranked);
        
    } catch (error) {
          res.status(500).json({ error: err.message });
    }
})

UserRoute.get("/alluser", async (req, res) => {
  try {
    const users = await userModel.find({}, "_id name");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports=UserRoute