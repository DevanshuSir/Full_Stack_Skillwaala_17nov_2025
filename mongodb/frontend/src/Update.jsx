import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const Update = () => {

    const {id} = useParams()
    const [form,setForm] = useState([])
    const navigate = useNavigate()



    useEffect(()=>{
           fetch(`/api/useeupdate/${id}`).then((res)=>{return res.json()}).then((data)=>{
       setForm(data)
    })
    },[])

   

    function handleForm(e){
        e.preventDefault()
        fetch(`/api/update/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(form)
        }).then((res)=>{return res.json()}).then((data)=>{
          if(data.message=="Successfully Updated..."){
            navigate("/")
          }
        })
    }

  return (
    <div>
      <h1>Update User</h1>
      <form action="" onSubmit={handleForm}>
        <input type="text" name="name" id="" placeholder="Name"
        value={form.name}
         onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}
        
        />
        <br /><br />
        <input type="email" name="email" id="" placeholder="Email"
        value={form.email}
         onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}
        
        />
        <br /><br />
        <input type="text" name="age" id="" placeholder="Age"
        value={form.age}
         onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}
         
        />
        <br /><br />
        <input type="submit" value="Update" />
      </form>
    </div>
  )
}

export default Update
