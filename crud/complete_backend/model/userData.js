let users = []

const getUsers = ()=>users

const addUser = (user)=>{
    users.push(user)
    return user
}

const deleteUsers = (id)=>{

    users = users.filter(u => u.id !== id)
}

const updateUser = (id,newName)=>{
    users = users.map(u=>{
        if(u.id===id){
            return {...u,name:newName}
        }
        return u
    })
}



module.exports ={addUser,getUsers,deleteUsers}