import React, { useState } from 'react'

const Form = () => {

    const [userName,setUserName] = useState("")
    const [userEmail,setUserEmail] = useState("")
    const [userPass,setUserPass] = useState("")
    const [greet,setGreet] = useState("")

    function handleForm(e){
        e.preventDefault()
        console.log({
            name:userName,
            email:userEmail,
            password:userPass
        })
        setGreet(userName)
    }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Hello {greet===""?"Form":greet}..🚦</h1>

      <form action="" onSubmit={handleForm}>
        <label htmlFor="">UserName</label>
        <input type="text" name="" id="" placeholder='Enter User Name..'
        value={userName}
        onChange={(e)=>{setUserName(e.target.value)}}
        />
        <br /><br />
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" placeholder='Enter Your Email..'
        value={userEmail}
        onChange={(e)=>{setUserEmail(e.target.value)}}
        
        />
        <br /><br />
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" placeholder='Enter Your Password..'
        value={userPass}
        onChange={(e)=>{setUserPass(e.target.value)}}
        
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
