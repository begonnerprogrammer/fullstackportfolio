const express=require("express");
const app=express();
const Collection = require("./schema/model");
app.use(express.json());
require("./db/conn")
  app.post("/register", (req, res) => {
        const { name, email,subject,massage } = req.body;
       
        const user = new Collection({ name, email,subject,massage });
                    
        
        user.save().then(() => {
        res.status(201).json({ massage: "Massage send" });
                        })
        .catch((e) => { console.log(e) })
            
      })

app.listen(4000,()=>{
  console.log("server is on the port 4000")
})


// router.post("/register", (req, res) => {
//   const { name, email, password } = req.body;




//   //hashing password

//   bcrypt.hash(password, 10).then(hash => {
//       Collection.findOne({ email: email }).then(user => {



//           if (user) {
//               res.json("already have an acount")
//           }
//           else {
        
//               const user = new Collection({ name, email, password: hash });
              
  
             
//                   user.save().then(() => {
//                       res.status(201).json({ massage: "Massage send" });
//                   })
//                       .catch((e) => { console.log(e) })
      
              
            





//           }
//       }
//       )
//   })
//       .catch(err => console.log(err))





// })