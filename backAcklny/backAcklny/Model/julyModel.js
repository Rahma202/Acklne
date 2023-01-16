const mongoose = require('mongoose');
const JulySchema=new mongoose.Schema({
    _id:String,
    id:Number,
    name:String,
    detials:String,
    img:String,
    price:Number
 })
const july=mongoose.model("23July",JulySchema,"23July")
 module.exports=july;


 