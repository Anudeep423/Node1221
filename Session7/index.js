/*
1) Create a route "/" and send any response and create "/users"
get route and send users data(JSON) as a response.

2) create a "/signup" post route and print the incoming data sent
by the client and send response as "Data received".
-> send 404 not found if the user is trying to hit the api which 
is not created.

3) Create 3 routes in a different file. name - schoolRoutes.js
Api's - 
-> /register - POST 
-> /student - GET
-> /teachers - GET


4) Create eCommerce.js file in views folder in that file you need to 
make 2 get APis
-> /books
-> /customers
send response of both the api's by making api calls.
*/
const express = require("express");
const app = express();
const port = 8080;
const http = require("http");
const schoolRoutes = require("./views/schoolRoutes");
const eCommerceRoutes = require("./views/eCommerce");

console.log(http.STATUS_CODES);

let usersData = [
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
    },
    {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
    "lat": "-43.9509",
    "lng": "-34.4618"
    }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
    "name": "Deckow-Crist",
    "catchPhrase": "Proactive didactic contingency",
    "bs": "synergize scalable supply-chains"
    }
    }]
app.use(express.json()); 

app.use( "/school" , schoolRoutes);
app.use("/commerce" ,  eCommerceRoutes);


app.get("/" , (req,res) => {
    res.status(201).send("Welcome to express");
});

app.get("/users" , (req,res) => {
  res.status(200).json(usersData)
})

app.post("/signup" , (req,res) => {
    const {name} =  req.body;
if(name){
return res.status(202).send("Data received");
}
if(!name){
    return res.status(204).json("No Data received");
}
});

app.use("*" , (req,res) => {
return res.status(404).send("404 not found!")
})


app.listen( port , () => {
console.log(`server started running on port ${port}`);
})

