const express=require("express");
const app=express();

const PORT=8000;


app.get("/",(req,res)=>
res.send("Hai there kevin")
)

app.listen(PORT,()=>{
    console.log("Server started listening")
})