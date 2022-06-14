const express = require("express");
const router = express.Router();
const userModel = require("../models/userSchema");
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");


router.post("/users" 
, (req,res) => {
    const user = new userModel(req.body);
    user.save( (err,savedUser) => {
        if(err){
            res.json(err);
        }else{
            res.json(savedUser)
        }
    });
});




router.get("/users" , (req,res) => {
    userModel.find(  (err,users) => {
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    });
});

router.get("/users/:id" , (req,res) => {
    userModel.findOne( {_id : req.params.id  } ,   (err,users) => {
        if(err || !users){
            if(!users){
               return res.status(404).json({ Error : "No user was found with this ID" })
            }
            return res.json(err)
        }else{
            return res.json(users)
        }
    });
});

router.put("/users/:id" , (req,res) => {
    userModel.updateMany( { _id : req.params.id } , req.body , (err,result) => {
       if(err){
        res.json(err)
       }else{
        res.json(result)
       }
    });
});


router.delete("/users/:id" , (req,res) => {
    userModel.deleteOne( { _id : req.params.id } , (err,result) => {
       if(err){
        res.json(err)
       }else{
        res.json(result)
       }
    });
});


module.exports = router;
