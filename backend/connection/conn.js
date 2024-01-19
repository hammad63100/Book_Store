const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://hammad63100:hammad.63100@cluster0.ptnettf.mongodb.net/crudop?retryWrites=true&w=majority").then(()=>{
    console.log("database connected");
});
