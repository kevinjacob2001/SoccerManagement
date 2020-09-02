const express=require("express");
const router=express.Router();

const Player=require("../models/playerModels")


router.post("/",async(req,res)=>{
let newPlayer=new Player(req.body);
    try{
        const a1 = await newPlayer.save();
        res.json(a1);
    }
    catch(err){
    res.send("ERROR")
    }
})


module.exports=router;