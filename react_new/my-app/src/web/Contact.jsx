import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Contact Page ..🙄</h1>
      <button onClick={()=>{navigate("/")}}>Back To Home</button>
    </div>
  )
}

export default Contact
