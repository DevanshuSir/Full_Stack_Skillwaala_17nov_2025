import React, { useEffect, useState } from 'react'

const App = () => {

  const [userName,setUserName] = useState("")
  const [users,setUsers] = useState([])


  
  const fetchUsers = async()=>{
    const res =await  fetch("/api/getusers")
    const data = await res.json()

    setUsers(data)
  }

 useEffect(()=>{fetchUsers()},[])

  function handleForm(e){
    e.preventDefault()
    const formData = {user:userName}
    fetch('/api/users',{ //http://localhost:5000/api/users
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formData)
    }).then((res)=>{return res.json()}).then((data)=>{
     
    })
  }




 async function handleDelete(id){
  await fetch(`/api/userdelete/${id}`,{
    method:"DELETE"
  }).then((res)=>{return res.json()}).then((data)=>{
    console.log(data)
  })

  fetchUsers()
 }

  return (
    <div>
      <h1>USER CRUD 😍</h1>
      <form action="" onSubmit={handleForm}>
        <input type="text" name="" id="" placeholder='Enter Name..'
        value={userName}
        onChange={(e)=>{setUserName(e.target.value)}}
        />
        <button>Add</button>
        <ul>
          {
            users.map((user)=>(
              <>
                <li>{user.name}</li>
                <button>Edit</button>
              <button onClick={()=>{handleDelete(user.id)}}>Delete</button>
              </>
            
            ))
          }
        </ul>
      </form>
    </div>
  )
}

export default App


// point 1 - read
// point 2 - delete
