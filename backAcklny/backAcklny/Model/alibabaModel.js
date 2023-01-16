const mongoose = require('mongoose');

const aliBabaSchema=new mongoose.Schema({
    
    _id:String,
    id:Number,
    name:String,
    detials:String,
    img:String,
    price:Number
    
 })
const aliBaba=mongoose.model("AliBaba",aliBabaSchema,"AliBaba")
 module.exports=aliBaba;