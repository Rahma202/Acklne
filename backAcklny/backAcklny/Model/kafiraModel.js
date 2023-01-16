const mongoose = require('mongoose');
const kfiraSchema=new mongoose.Schema({
    _id:String,
    id:Number,
    name:String,
    detials:String,
    img:String,
    price:Number
 })
const kfiraRes=mongoose.model("Kafira",kfiraSchema,"Kafira")
 module.exports=kfiraRes;