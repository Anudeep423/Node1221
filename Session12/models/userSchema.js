const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name  : {
        type : String,
        required : true
    },
    email : {
        type : String
    },
    phoneNo : {
        type : String
    },
    Address : {
        type : String
    }
}) 


const userModel = mongoose.model("user",userSchema);

module.exports = userModel;