const express = require('express');
const router=new express.Router();
const lamiraControl=require("../controllers/Lamira")

const {isAuth} = require('../MiddleWares/Auth')
const {lamiraAdmin} = require('../MiddleWares/admins')


router.get("/",lamiraControl.getAllFood);
router.get("/getName",lamiraControl.getFoodByName)
router.get("/id/:id",lamiraControl.getFoodById)

router.post("/", [isAuth,lamiraAdmin] ,lamiraControl.addNewFood);
router.delete("/:id",[isAuth,lamiraAdmin] ,lamiraControl.deletById)

router.patch("/update/:id",[isAuth,lamiraAdmin] ,lamiraControl.update)

module.exports=router