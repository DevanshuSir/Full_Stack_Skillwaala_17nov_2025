const mongoose = require("mongoose")

const {Schema,model} = mongoose


const blogSchema = new Schema({
    title:{type:String,required:true},
    subTitle:{type:String},
    description:{type:String,required:true},
    category:{type:String,required:true},
    publish:{type:Boolean,required:true}
},{timestamps:true});


module.exports = model("blog",blogSchema)