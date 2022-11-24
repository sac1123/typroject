const mongoose = require("mongoose");
const bcrypt =require("bcryptjs")

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
userSchema.pre("save",async function(next){

    if(this.isModified("password")){
        console.log(`the cureent password is ${this.password}`);
        this.password = await bcrypt.hash(this.password,10);
        console.log(`the cureent password is ${this.password}`);
    }
    next();
})

// collection create

const Register = new mongoose.model("User_cred",userSchema);
module.exports = Register;