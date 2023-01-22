const express = require('express');
const router=new express.Router();
const {isAuth} = require('../MiddleWares/Auth')
const {alibabaAdmin} = require('../MiddleWares/admins')

const aliBabaControl=require("../controllers/AliBabaControlor")



router.get("/",aliBabaControl.getAllFood);
router.get("/getName",aliBabaControl.getFoodByName)
router.get("/id/:id",aliBabaControl.getFoodById)
router.post("/", [isAuth,alibabaAdmin] ,aliBabaControl.addNewFood);
router.delete("/:id", [isAuth,alibabaAdmin] ,aliBabaControl.deletById)
router.patch("/update/:id", [isAuth,alibabaAdmin] ,aliBabaControl.update)

module.exports=router