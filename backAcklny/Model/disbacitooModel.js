const mongoose = require('mongoose');
const despacitoSchema=new mongoose.Schema({
    _id:String,
    id:Number,
    name:String,
    detials:String,
    img:String,
    price:Number
 })
const disbacitoo=mongoose.model("despacito",despacitoSchema,"despacito")
 module.exports=disbacitoo;