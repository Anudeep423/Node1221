const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/register" , (req,res) => {
    res.send("Data received by eCommerce routes");
    })

router.get("/books" , async (req,res) => {
    try{
  const response =   await axios.get("https://api.itbook.store/1.0/search/mongodb");
  res.json(response.data.books);
    }catch(err){
        res.json(err.message);
    }
});


router.get("/customers" , (req,res) => {
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then( (response) => {
    res.json(response.data)
  }).catch( (err) => {
      res.json(err);
  } )
});

module.exports = router;