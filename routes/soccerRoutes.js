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

router.get("/", async (req, res) => {
    try {
        const players = await Player.find({})
        res.json(players)
    }
    catch (err) {
        res.send("Error" + err);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const player = await Player.findById(req.params.id)
        res.json(player)
    }
    catch (err) {
        res.send("Error" + err);
    }
})

router.put("/:id", async (req, res) => {
    try {
        const player = await Player.findOneAndUpdate(req.params.id,req.body,{new:true})
        res.json(player)
    }
    catch (err) {
        res.send("Error" + err);
    }
})  

module.exports=router;