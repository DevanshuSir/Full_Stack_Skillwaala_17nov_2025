const express = require("express")
const app = express()

app.use(express.json())

let user = []

app.get("/",(req,res)=>{
    res.send("Hello Express js class")
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})

app.get("/search",(req,res)=>{
    console.log(req.query.name)
})

app.get("/user/:id",(req,res)=>{
    res.send(`User Id :- ${req.params.id} `)
})

app.get('/product',(req,res)=>{
    res.send("Hello Product Page")
})

app.post("/add-user",(req,res)=>{
    user.push(req.body)
    res.send("User Added")
})

app.get("/user",(req,res)=>{
    res.send(user)
})

app.use((req,res)=>{
    res.status(404).send("Page Not Found")
})




let port = 5000
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})




