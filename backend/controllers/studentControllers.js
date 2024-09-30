const stuModel= require("../models/studentModels");
const stuRecSave=async(req, res)=>{
   const myData= new stuModel(req.body)   
     myData.save().then((data)=>{
        res.json({msg:"data save!!!"});
     })
}
const stuDisplay=async(req, res)=>{
   stuModel.find().then((data)=>{
       res.json(data);
   });
}

const upDisplay=async(req, res)=>{
   stuModel.find().then((data)=>{
       res.json(data);
   });
}

const stuDelete=async(req, res)=>{
   let o=req.body.id;
   stuModel.findByIdAndDelete(o).then((data)=>{
      res.json({msg:"data succesfully delete"});
   })
}


const stuEdit=async(req, res)=>{
   let ourid=req.body.id;
        stuModel.findById(ourid).then((data)=>{
          res.json(data);
        })
 }
 const stueditSave=async(req, res)=>{      
          //console.log(req.body);
          const myid= req.body._id;
          const rollno=req.body.rollno;
          const name=req.body.name;
          const city=req.body.city;
          const fees=req.body.fees;
          stuModel.findByIdAndUpdate(myid, {rollno, name, city, fees}).then((data)=>{
           res.json({msg:"data Edit Success"});
       })
 }
 
 const stuSearch=async(req, res)=>{
        
        const rollno=req.body;
        stuModel.find(rollno).then((data)=>{
          res.json(data);
        })
        
 
 }
 
 

module.exports={
    stuRecSave,
    stuDisplay,
    upDisplay,
    stuDelete,
    stuEdit,
    stueditSave,
    stuSearch
}