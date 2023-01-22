const express = require('express');
const router=new express.Router();
const balaconaControl=require("../controllers/balaconaControlor")

const {isAuth} = require('../MiddleWares/Auth')
const {balaconaAdmin} = require('../MiddleWares/admins')




router.get("/",balaconaControl.getAllFood);
router.get("/getName",balaconaControl.getFoodByName)
router.get("/id/:id",balaconaControl.getFoodById)

router.post("/",[isAuth,balaconaAdmin],balaconaControl.addNewFood);
router.delete("/:id",[isAuth,balaconaAdmin] ,balaconaControl.deletById)
router.patch("/update/:id",[isAuth,balaconaAdmin] ,balaconaControl.update)


module.exports=router