const express = require("express")
const app = express()
const userRoute = require("./routes/user")





app.use(express.json())
app.use("/api" , userRoute)
let port = 5000
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})