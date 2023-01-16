const mongoose = require('mongoose');
const balaconaSchema=new mongoose.Schema({
    _id:String,
    id:Number,
    name:String,
    detials:String,
    img:String,
    price:Number
 })
const balacona=mongoose.model("balacona",balaconaSchema,"balacona")
 module.exports=balacona;