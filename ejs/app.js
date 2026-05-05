const express = require("express")
const app = express()

app.use(express.static("public"))

let user ={name:"Dev"}

app.get("/",(req,res)=>{
    res.send("Hello Node and ExpressJs Class 😍")
})

app.get("/user",(req,res)=>{
    res.render('index.ejs',user)
})

app.set("view engine","ejs")

app.listen(5000,()=>{
    console.log("Running on port 5000")
})


