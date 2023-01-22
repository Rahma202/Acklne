const balacona=require("../Model/balaconaModel");
let addNewFood=(req,res)=>{
 let newFood=new balacona({
    name:req.body.name,
    detials:req.body.detials,
    img:req.body.img,
    price:req.body.price
 })  
 newFood.save().then(()=>{console.log("save");}) 
}
let getFoodByName=async (req,res)=>{
    let foodName=await balacona.find({name:req.body.name})
    if(!foodName)
    {return res.send("NotFound")
}else{
  return  res.send(foodName)
}

}
let getFoodById=async (req,res)=>{
  let foodId=await balacona.find({id:req.params.id})
  console.log(+ req.params.id);
  if(!foodId)
  {return res.send("NotFound")
}else{
return  res.send(foodId)
}

}
let getAllFood=async(req,res)=>{
    let  allFood= await balacona.find({});
    res.send(allFood)

}


let deletById=async (req,res)=>{
  await balacona.findOneAndDelete({id:req.params.id},(err,data) =>{
   res.send("Deleted Successfully");
 })
 }


 let update = async function (req, res) {
  var data = { id: req.params.id}
  var newdata = { $set: {name:req.body.name,
                          detials:req.body.detials,
                          img:req.body.img,
                          price:req.body.price}}
  await balacona.updateOne(data,newdata,function (req,res){

})
res.send("updated Successfully");
};

 module.exports={addNewFood,getFoodByName,getAllFood,deletById,getFoodById,update}