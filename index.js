const express=require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const cors=require("cors");
const app=express();
const PORT=8000;

dotenv.config();

//Mongoose connection
mongoose.connect(
    process.env.DB_CONNECT,{useNewUrlParser:true},()=>{
    console.log("Connected to DB")
})

//bodyparser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//CORS Setup
app.use(cors())

const playerRouter=require("./routes/soccerRoutes");
app.use("/players",playerRouter)


app.listen(PORT,()=>{
    console.log("Server started listening")
})