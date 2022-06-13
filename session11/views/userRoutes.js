const express = require("express");
const router = express.Router();
const { getCollection } = require("../dbConnection");
const { ObjectId }  = require("mongodb");


router.get("/getUsers", async (req, res) => {
    const collection = await getCollection();
    const usersData = await collection.find().toArray();
    res.json(usersData);
});

router.get("/getUser/:id" , async (req,res) => {
    const collection = await getCollection();
    try{
    const user = await collection.findOne({ _id : ObjectId(req.params.id) });
    res.json(user);
    }catch(err){
        res.status(404).json({ Error : "user not found with this id" });
    }

})

router.post("/registerUsers", async (req, res) => {
    const {name,email,password,confirmPassword} = req.body;
    if(!name || !email || !password || !confirmPassword){
        return res.status(206).json({ Error : "Fields missing" })
    }else{
        if(password != confirmPassword){
            return res.status(417).json({ Error : "password and confirm password do not match" })
        }else{
            const collection = await getCollection();
            try{
            const result = await collection.insert({ name , email , password });
            res.status(201).json({ Success : "User registered" });
            }catch(err){
                res.json(err);
            }
        }
    }
})

router.put("/updateUser/:id" , async (req,res) => {
    const collection = await getCollection();
    try{
    const result = await collection.update( { _id : ObjectId(req.params.id) }, { $set : req.body })
      return res.json(result);
    }catch(err){
        return res.status(404).json({ Error : "No user found with this id" })
    }
});

router.delete("/deleteUser/:id" , async (req,res) => {
    const collection = await getCollection();
    try{
    const result = await collection.deleteOne({ _id : ObjectId(req.params.id)  });
    if(result.deletedCount == 0){
        return res.status(404).json({ Error : "No user found with this id" })
    }
    return res.json(result);
    }catch(err){
        res.json(err);
    }

})





module.exports = router;