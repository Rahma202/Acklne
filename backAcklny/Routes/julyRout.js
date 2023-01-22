const express = require('express');
const router=new express.Router();
const julyControl=require("../controllers/julyControlor")

const {isAuth} = require('../MiddleWares/Auth')
const {julyAdmin} = require('../MiddleWares/admins')


router.get("/",julyControl.getAllFood);
router.get("/getName",julyControl.getFoodByName)
router.get("/id/:id",julyControl.getFoodById)

router.post("/", [isAuth,julyAdmin] ,julyControl.addNewFood);
router.delete("/:id",[isAuth,julyAdmin] ,julyControl.deletById)
router.patch("/update/:id",[isAuth,julyAdmin] ,julyControl.update)


module.exports=router