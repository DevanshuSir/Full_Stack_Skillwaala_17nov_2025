const mongoose = require("mongoose")

const {Schema,model} = mongoose


const userSchema = new Schema({
    name:String,
    email:String,
    age:Number
},{versionKey:false})


module.exports = model("User",userSchema)