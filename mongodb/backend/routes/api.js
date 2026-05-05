const api = require("express").Router()
const userController = require("../controller/user")



api.get("/",userController.homePage)
api.post("/create",userController.createUser)
api.get("/users",userController.userData)
api.delete("/deleteuser/:abc",userController.deleteUser)
api.get("/useeupdate/:abc",userController.updateUserData)
api.put("/update/:abc",userController.updateUser)






module.exports = api