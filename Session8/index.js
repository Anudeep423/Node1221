// const express = require("express");
// const app = express();
// const port = 8080;

// app.set("view engine","ejs");

// app.get("/", (req,res) => {
//    res.render("index.ejs",{
//        title : "Welcome to ejs",
//        names : ["Avinash","akhil","Vijay"]
//    })
// })

// app.listen(port , () => {
//     console.log(`server started running on port ${port}`);
//     });



// const mongoose = require("mongoose");


// mongoose.connect("mongodb+srv://Anudeep:123456789@cluster0.lauqhdr.mongodb.net/?retryWrites=true&w=majority",{
//     useNewUrlParser: true, useUnifiedTopology: true
// }).then(() => {
//     console.log(`DB Connected`)
// }).catch( () => {
//     console.log(`DB Connection failure`)
// })

// const mysql = require("mysql");
// const db = mysql.createConnection({
//     host : "localhost",
//     user : "testUser",
//     password : "123456aA$"
// });

// db.connect( (err) => {
//     if(!err){
//         console.log(`DB Connected`);
//     }else{
//         console.log(`DB Connection failed`);
//     }
// })

// app.get("/getCompanyDetails" , (req,res) => {
// let sqlQuery = `SELECT * FROM world.company;`;
// db.query(sqlQuery, (err,resultData) => {
// if(!err){
//     res.send(resultData);
// }
// })
// })


