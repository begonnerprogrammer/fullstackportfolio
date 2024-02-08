const mongoose=require("mongoose");
const Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    subject:{  
    type:String,
    required:true,
    }
    ,
    massage:{
        type:String,
        required:true,
    }
})


const Collection=new mongoose.model("Collection",Schema);
module.exports=Collection;