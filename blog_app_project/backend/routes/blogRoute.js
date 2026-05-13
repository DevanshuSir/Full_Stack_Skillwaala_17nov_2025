const blog = require("express").Router()
const adminC = require("../controller/adminController")


blog.post("/login",adminC.adminLogin)



module.exports = blog