const express = require("express");
const app = express();
const port = 8080;
const userRoutes = require("./views/userRoutes");
const http = require("http");

console.log(http.STATUS_CODES);


/*
/registerUsers - POST Request
Client must send 4 fields 
1) name
2) email 
3) password
4) confirmPassword

-> give proper error response if any of the fields is missing

-> check if password and confirm password match 
if Not - send response (password and confirm password do not match )
if matches - store document in DB and send response user registered




2) Create a get Request "/getUser/:id"
check if user exists 
if YEs - send back the user 
if not - send user not found along with suitable status code

not the API Request from the client and show 404 not found for the 
Api's which are not create 
*/

app.use(express.json());
app.use(userRoutes);
app.use("*" , (req,res) => {
res.status(404).json("Not found")
})

app.listen(port, () => {
    console.log(`server started running on port ${port}`);
})