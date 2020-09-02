const { mongo } = require("mongoose");

const mangoose=require("mongoose");

const playerSchema=new mongoose.Schema({

    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true}   

})





module.exports=mongoose.model("",playerSchema);