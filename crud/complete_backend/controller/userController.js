const {addUser,getUsers,deleteUsers} = require("../model/userData")

const homePage = (req,res)=>{
    res.send("Home Page (MVC)")
}


const getAllUsers = (req,res)=>{
    res.json(getUsers())
}

const createUser = (req,res)=>{

    const user = {
        id:Date.now(),
        name:req.body.user
    }
    addUser(user)
    res.json(user)
}


const deleteUser = (req,res)=>{
//    console.log(req.params.abc)
    deleteUsers(parseInt(req.params.abc))
    res.json({message:"Deleted"})
}





module.exports = {homePage,createUser,getAllUsers,deleteUser}