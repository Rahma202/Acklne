const mongoose = require('mongoose');
const aliBaba=require("../Model/alibabaModel");



let addNewFood=(req,res)=>{
 let newFood=new aliBaba({
    name:req.body.name,
    detials:req.body.detials,
    img:req.body.img,
    price:req.body.price,
    totalPrice:req.bodytotalPrice
 })  
 
 newFood.save().then(()=>{console.log("save");}) 
}

// //////////////////////////////////////////////////
let getFoodByName=async (req,res)=>{
    let foodName=await aliBaba.find({name:req.body.name})
    if(!foodName)
    {return res.send("NotFound")
}else{
  return  res.send(foodName)
}
}

//////////////////////////////////////////////////////////

let getFoodById=async (req,res)=>{
  let foodId=await aliBaba.find({id:req.params.id})
  console.log(+ req.params.id);
  if(!foodId)
  {return res.send("NotFound")
}else{
return  res.send(foodId)
}
}

// ///////////////////////////////////////////////////////

let getAllFood=async(req,res)=>{
    let  allFood= await aliBaba.find({});
    res.send(allFood)
}

let deletById=async (req,res)=>{
 aliBaba.findOneAndDelete({id:req.params.id},(err,data) =>{
  res.send("Deleted Successfully");
})
}

let update =  function (req, res) {
  var data = { id: req.params.id}
  var newdata = { $set: {name:req.body.name,
                          detials:req.body.detials,
                          img:req.body.img,
                          price:req.body.price}}
  aliBaba.updateOne(data,newdata,function (req,res){

})
res.send("updated Successfully");
};


 module.exports={addNewFood,getFoodByName,getAllFood,deletById,getFoodById,update}


//  app.delete("/api/alibaba/:_id",(req,res)=>{
//   AliBaba.findOneAndDelete({_id:req.params._id},(err,data)=>{
//               // console.log(data); 
//               // res.send("Deleted Successfully")
//               res.redirect("/api/alibaba");




// app.patch('/alibaba/:id', function (req, res) {
//   var data = { id: req.params.id}
//   var newdata = { $set: {first_name: "Heba"}}
//   db.collection("Students").updateOne(data,newdata,function (req,res){

// })
// res.redirect("/api/alibaba");
// });
