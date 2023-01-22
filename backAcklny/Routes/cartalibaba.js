const express = require('express');
const router=new express.Router();
const cart=require("../controllers/Cartalibaba")

const {isAuth} = require('../MiddleWares/Auth')




router.get("/cart",isAuth,cart.getCart);
router.post("/cart",cart.addCart);



module.exports=router