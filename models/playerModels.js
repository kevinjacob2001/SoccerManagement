const { mongo } = require("mongoose");

const mongoose=require("mongoose");

const playerSchema=new mongoose.Schema({

    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number},
    isCoach:{type:Boolean,default:false},
    team:{type:String},
    speed:{type:Number,enum:[1,2,3]},
    strength:{type:Number,enum:[1,2,3]},
    endurance:{type:Number,enum:[1,2,3]},
    ability:{type:Number,enum:[1,2,3]},
    techniques:{type:Number,enum:[1,2,3]},
    tactical:{type:Number,enum:[1,2,3]},
    created_date:{type:Date,default:Date.now},

})

module.exports=mongoose.model("Player",playerSchema);