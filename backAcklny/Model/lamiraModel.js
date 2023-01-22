const mongoose = require('mongoose');
const LamiraSchema=new mongoose.Schema({
    _id:String,
    id:Number,
    name:String,
    detials:String,
    img:String,
    price:Number
 })
const Lamira=mongoose.model("Lamira",LamiraSchema,"Lamira")
 module.exports=Lamira;