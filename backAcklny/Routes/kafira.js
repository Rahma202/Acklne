const express = require('express');
const router=new express.Router();
const kafiraControl=require("../controllers/kafiraControl")

const {isAuth} = require('../MiddleWares/Auth')
const {kafiarAdmin} = require('../MiddleWares/admins')





router.get("/",kafiraControl.getAllFood);
router.get("/getName",kafiraControl.getFoodByName)
router.get("/id/:id",kafiraControl.getFoodById)

router.post("/",[isAuth,kafiarAdmin] ,kafiraControl.addNewFood);
router.delete("/:id",[isAuth,kafiarAdmin] ,kafiraControl.deletById)
router.patch("/update/:id", [isAuth,kafiarAdmin] ,kafiraControl.update)


module.exports=router