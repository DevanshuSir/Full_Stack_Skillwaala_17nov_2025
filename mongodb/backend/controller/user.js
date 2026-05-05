const userModel = require("../model/user");

const homePage = (req, res) => {
  res.send("Home page ..");
};

const createUser = async(req, res) => {
  const { userName, userEmail, userAge } = req.body;
  const record = await new userModel({
    name: userName,
    email: userEmail,
    age: userAge,
  });

  await record.save()
  res.json({message:"Successfully Create User..👍"})
};

const userData = async(req,res)=>{
    const user =  await userModel.find()
    res.json(user)
}


const deleteUser = async(req,res)=>{
  const dbId = req.params.abc
  await userModel.findByIdAndDelete(dbId)
  res.json({message:"Successfully Delete.."})
}

const updateUserData = async(req,res)=>{
  const userId =req.params.abc
  const userdata = await userModel.findById(userId)
  res.json(userdata)
}

const updateUser = async(req,res)=>{
  const {name,email,age} =req.body
  const id =req.params.abc

 await  userModel.findByIdAndUpdate(id,{
     name:name,
    email:email,
    age:age
  })

  res.json({message:"Successfully Updated..."})

}

module.exports = {
  homePage,
  createUser,
  userData,
  deleteUser,
  updateUserData,
  updateUser
};
