import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
       
      <h1>User Dashboard</h1>
      <div style={{display:"flex", gap:"20px"}}>
        <Link to="profile">Profile</Link>
        <Link to="setting">Setting</Link>
        <Link to="course">Courses</Link>
      
      </div>
          <Outlet/>
      
    </div>
   
  )
}

export default Dashboard
