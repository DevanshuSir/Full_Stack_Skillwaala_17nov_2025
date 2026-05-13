const express = require ("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv").config()
const blogRoute = require("./routes/blogRoute")
const mongoose = require("mongoose")




//DataBase
mongoose.connect("mongodb://127.0.0.1:27017/blog_app").then(()=>{
    console.log("Successfully connected DB 🥳")
}).catch((err)=>{
    console.log(err)
})


//Middleware
app.use(express.json())
app.use(cors())
app.use("/api",blogRoute)

let port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})