const mongoose=require("mongoose");
const env=require('dotenv');
env.config();
  mongoose.connect(`${process.env.DB}`)
  .then(()=>{console.log("connection succesful")})
  .catch((e)=>{console.log(e)})