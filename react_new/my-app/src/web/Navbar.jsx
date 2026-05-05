import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{background:"black",color:"white", textAlign:"center",padding:"10px"}}>
      <Link style={{color:"white"}} to={"/"}>Home</Link>|
      <Link style={{color:"white"}}  to={"/about"}>AboutPage</Link>|
      <Link style={{color:"white"}}  to={"/contact"}>ContactPage</Link>|
       <Link style={{color:"white"}}  to={"/product/devanshu"}>Products</Link>|
       <Link style={{color:"white"}}  to={"/dashboard"}>Dashboard</Link>
    </div>
  )
}

export default Navbar
