/*
callback function - is a function which is sent as an argument, 
and is executed after completion of an async operation.

promise - it is an object , which represents eventual completion 
of an async operation
request success - promise resolved
request failure - promise reject

*/




// const axios = require("axios");
// axios.get("https://jsonpl.typicode.com/userjnjns")
// .then( (response) => 
// {console.log(response.data);
//     return "Random data"
// }).then( (response1) => 
// {console.log("response1" ,response1)}  
// ).catch(  (err) => {
//     console.log(err);
// });


// function getData(seconds) {
//     return new Promise((resolve, reject) => {
//         if (seconds > 5) {
//             reject(`promise rejected because time taken is more than 5 seconds`)
//         } else {
//             setTimeout(() => {
//                 resolve(`setTimeout executed after ${seconds} seconds`)
//             }, seconds * 1000);
//         }
//     })
// }

// async function start(){
//  try{   
// let response = await getData(10);
// console.log(response)
// let response1 = await getData(3);
// console.log(response1);
//  }catch(err){
// console.log(err);
//  }
// }

// start();

// getData(3)
//     .then((response) => {
//         console.log(response);
//         return getData(1)
//     }).then((response1) => {
//         console.log(response1);
//         return getData(0.5)
//     }).then((response2) => {
//         console.log(response2);
//     })
//     .catch((err) => {
//         console.log(`failure response  ${err}`);
//     })

// setTimeout(() => {
//     console.log(`first setTimeout executed after 3 seconds at line 8`);
//     setTimeout(() => {
//         console.log(`Second setTimeout executed after 1 second at line 10`);
//         setTimeout(() => {
//             console.log(`Third setTimeout executed after 0.5 second at line 12`)
//         }, 500)
//     }, 1000)
// }, 3000)



// const { MongoClient, ServerApiVersion , ObjectID } = require('mongodb');
// const uri = "mongodb+srv://Anudeep:12345@cluster0.lauqhdr.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// function getCollection(){
// return new Promise((resolve,reject) => {
//     client.connect( async (err) => {
//         if(!err){
//             console.log("DB Connected");
//       const collection = client.db("test").collection("devices");
//       resolve(collection)
//         }else{
//             reject(err);
//         }
//       // perform actions on the collection object
//     })
// });
// }


// const express = require("express");
// const app = express();
// const port = 8080;


// app.use( express.json() );

// app.get("/getUsers" , async (req,res) => {
//  let collection = await getCollection();
//  let usersData =  await collection.find().toArray();
//  res.json(usersData);
// });

// app.post("/registerUsers" , async (req,res) => {
//     let collection = await getCollection();
//     let  result   = await collection.insert(req.body);
//     res.send(result);
// });

// app.put("/updateUser/:userID"  , async (req,res) => {
//     let collection = await getCollection();
//      let result = await collection.updateOne(  { _id : ObjectID(req.params.userID)  } , { $set : req.body   } )
//     res.send(result);
// });

// app.delete("/deleteUser/:userID" ,async (req,res) => {
//     let collection = await getCollection();
//     let result =   await collection.deleteOne({ _id : ObjectID(req.params.userID)  });
//     res.send(result);
// })


// app.listen( port , () => {
// console.log(`server started running on port ${port}`);
// })

