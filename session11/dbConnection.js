const { MongoClient, } = require('mongodb');
const uri = "mongodb+srv://Anudeep:12345@cluster0.lauqhdr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

function getCollection(){
    return new Promise( (resolve,reject) => {
client.connect(err => {
    if(!err){
  const collection = client.db("test").collection("devices");
        resolve(collection)
    }else{
        reject(err);
    }
});
});
}

module.exports = {
    getCollection
}