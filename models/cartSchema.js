const mongoose = require("mongoose");

const userCartSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    ShoeName:{
        type:String,
        require:true
    },
    Shoe_quantity:{
        type:Number,
        require:true
    },
    Shoe_size:{
        type:Number,
        require:true
    }
})

// collection create

const Register = new mongoose.model("User_cart",userCartSchema);
module.exports = addtocart;