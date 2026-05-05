const express = require ("express")
const app = express()
const apiRoute = require("./routes/api")
const mongoose = require("mongoose")


mongoose.connect("mongodb://127.0.0.1:27017/testing").then(()=>{
    console.log("Db Connect Successfully.")
}).catch((err)=>{
    console.log(err)
})

app.use(express.json())

app.use("/api",apiRoute)
let port = 5000
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})