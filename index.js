const express = require("express");
const app =  express();
const port = 8080;
const userRoutes = require("./views/users");



    let isAdmin = false;
  let checkAdmin = (req,res,next) => {
      if(isAdmin == true){
          next();
      }else{
          res.status(401).send("You are not an admin");
      }
  }  

app.use(express.json());
app.use(userRoutes);



app.use("*"  , (req,res) => {
    res.status(404).json({ error : "Not found" })
})

app.listen(port , () => {
console.log(`server started running on port ${port}`);
});