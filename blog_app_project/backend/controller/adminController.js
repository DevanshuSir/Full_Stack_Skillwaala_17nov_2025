const adminLogin = (req,res)=>{
    try {
        const {email,password} = req.body

        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"Invalid Credentials 🥺"})
        }
        
        res.json({success:true,message:"Successfully Login 😍"})

    } catch (error) {
        res.json({success:false,message:error.message})
    }
}



module.exports = {
    adminLogin
}