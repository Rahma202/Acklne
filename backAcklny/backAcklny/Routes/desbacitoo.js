const express = require('express');
const router=new express.Router();
const desbacitooControl=require("../controllers/disbacitoControlor")


const {isAuth} = require('../MiddleWares/Auth')
const {desbacitoAdmin} = require('../MiddleWares/admins')



router.get("/",desbacitooControl.getAllFood);
router.get("/getName",desbacitooControl.getFoodByName)
router.get("/id/:id",desbacitooControl.getFoodById)

router.post("/",[isAuth,desbacitoAdmin],desbacitooControl.addNewFood);
router.delete("/:id", [isAuth,desbacitoAdmin] ,desbacitooControl.deletById)
router.patch("/update/:id", [isAuth,desbacitoAdmin] ,desbacitooControl.update)

module.exports=router