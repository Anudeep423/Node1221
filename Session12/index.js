const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const userRoutes = require("./views/userRoutes");

const uri = "mongodb+srv://Anudeep:12345@cluster0.lauqhdr.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => { console.log(`DB Connected`)})
.catch( () => { console.log(`DB Connection failed`)});



app.listen( port , () => {
console.log(`Server started running on port ${port}`);
})