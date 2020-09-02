const express=require("express");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");


const app=express();
const PORT=8000;

//Mongoose connection
mongoose.connect(
    process.env.DB_CONNECT,{useNewUrlParser:true},()=>{
    console.log("Connected to DB")
})


app.get("/",(req,res)=>
res.send("Hai there kevin")
)

app.listen(PORT,()=>{
    console.log("Server started listening")
})