import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Form = () => {

    const [form,setForm] = useState({userName:"",userEmail:"",userAge:0})

    const [user,setUser] = useState([])



    function handleForm (e){
        e.preventDefault()
        fetch("/api/create",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(form)
        }).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
        })
    }


    useEffect(()=>{
        fetch("/api/users").then((res)=>{return res.json()}).then((data)=>{
            setUser(data)
        })
    },[user])

    function handleDelete(id){
      fetch(`/api/deleteuser/${id}`,{
        method:"DELETE"
      }).then((res)=>{return res.json()}).then((data)=>{
        console.log(data)
      })

    }

  return (
    <div>
      <h1>User's Form</h1>
      <form action="" onSubmit={handleForm}>
        <input type="text" name="" id="" placeholder="Name"
        value={form.userName}
        onChange={(e)=>{setForm({...form,userName:e.target.value})}}
        />
        <br /><br />
        <input type="email" name="" id="" placeholder="Email"
        value={form.userEmail}
         onChange={(e)=>{setForm({...form,userEmail:e.target.value})}}
        />
        <br /><br />
        <input type="number" name="" id="" placeholder="Age"
        value={form.userAge}
         onChange={(e)=>{setForm({...form,userAge:e.target.value})}}
        />
        <br /><br />
        <input type="submit" value="Create" />
      </form>
      {
        user.map((item)=>(
         
            <h3>
                user:-{item.name} | 
                email:-{item.email} | 
                age:-{item.age} 
                <span><button onClick={()=>{handleDelete(item._id)}}>Delete</button></span>
                <Link to={`/update/${item._id}`}><span><button>Update</button></span></Link>
                
            </h3>
            
        ))
      }
    </div>
  )
}

export default Form
