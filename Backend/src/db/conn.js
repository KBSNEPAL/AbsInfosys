const mongoose = require("mongoose");
mongoose.set("strictQuery",true);
mongoose.connect("mongodb://127.0.0.1:27017/Abs_infosys",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connection is sucessfull");
}).catch((err)=>{
    console.log(`Database connection is unsucessfull => Error ${err}`);
})