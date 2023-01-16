const Kfira=require("../Model/kafiraModel");
let addNewFood=(req,res)=>{
 let newFood=new Kfira({
    name:req.body.name,
    detials:req.body.detials,
    img:req.body.img,
    price:req.body.price
 })  
 newFood.save().then(()=>{console.log("save");}) 
}
let getFoodByName=async (req,res)=>{
    let foodName=await Kfira.find({name:req.body.name})
    if(!foodName)
    {return res.send("NotFound")
}else{
  return  res.send(foodName)
}

}
let getFoodById=async (req,res)=>{
  let foodId=await Kfira.find({id:req.params.id})
  console.log(+ req.params.id);
  if(!foodId)
  {return res.send("NotFound")
}else{
return  res.send(foodId)
}

}
let getAllFood=async(req,res)=>{
    let  allFood= await Kfira.find({});
    res.send(allFood)

}

let deletById=async (req,res)=>{
  Kfira.findOneAndDelete({id:req.params.id},(err,data) =>{
   res.send("Deleted Successfully");
 })
 }

 let update =  function (req, res) {
  var data = { id: req.params.id}
  var newdata = { $set: {name:req.body.name,
                          detials:req.body.detials,
                          img:req.body.img,
                          price:req.body.price}}
  Kfira.updateOne(data,newdata,function (req,res){

})
res.send("updated Successfully");
};

 module.exports={addNewFood,getFoodByName,getAllFood,deletById,getFoodById,update}