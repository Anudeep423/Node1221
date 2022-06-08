const express = require("express");
const router = express.Router();

router.post("/register" , (req,res) => {
res.send("Data received by School routes");
})

router.get("/getStudents" , (req,res) =>{
res.send("Students data");
})

router.get("/getTeachers" , (req,res) =>{
    res.send("Teachers data");
 });

 module.exports = router;