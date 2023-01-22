const lamira=require("../Model/lamiraModel");

let addNewFood=(req,res)=>{
 let newFood=new lamira({
    name:req.body.name,
    detials:req.body.detials,
    img:req.body.img,
    price:req.body.price
 })  
 newFood.save().then(()=>{console.log("save");}) 
}
let getFoodByName=async (req,res)=>{
    let foodName=await lamira.find({name:req.params.name})
    if(!foodName)
    {return res.send("NotFound")
}else{
  return  res.send(foodName)
}

}
let getFoodById=async (req,res)=>{
  let foodId=await lamira.find({id:req.params.id})
  console.log(+ req.params.id);
  if(!foodId)
  {return res.send("NotFound")
}else{
return  res.send(foodId)
}

}
let getAllFood=async(req,res)=>{
    let  allFood= await lamira.find({});
    res.send(allFood)

}

let deletById=async (req,res)=>{
  lamira.findOneAndDelete({id:req.params.id},(err,data) =>{
   res.send("Deleted Successfully");
 })
 }


 let update =  function (req, res) {
  var data = { id: req.params.id}
  var newdata = { $set: {name:req.body.name,
                          detials:req.body.detials,
                          img:req.body.img,
                          price:req.body.price}}
  lamira.updateOne(data,newdata,function (req,res){

})
res.send("updated Successfully");
};




 module.exports={addNewFood,getFoodByName,getAllFood,deletById,getFoodById,update}