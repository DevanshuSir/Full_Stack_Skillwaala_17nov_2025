const api = require("express").Router()
const userC = require("../controller/userController")


api.get("/",userC.homePage)
api.post("/users",userC.createUser)
api.get("/getusers",userC.getAllUsers)
api.delete("/userdelete/:abc",userC.deleteUser)

module.exports = api