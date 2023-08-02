const mongoose = require("mongoose");

const signupdata = mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },

    u_name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    con_password:{
        type:String,
        required:true
    }

},);

const signudata = mongoose.model("Signup_data", signupdata);

module.exports = signudata;