import React, { useState } from "react";

const Newform = () => {

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        pass:""
    })


    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    function handleForm(e){
        e.preventDefault()
        console.log(formData)
    }


  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello Form..🚦</h1>

      <form action="" onSubmit={handleForm}>
        <label htmlFor="">UserName</label>
        <input type="text" name="name" id="" placeholder="Enter User Name.." 
        value={formData.name}
        onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="" placeholder="Enter Your Email.."
        value={formData.email}
        onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="pass"
          id=""
          placeholder="Enter Your Password.."
          value={formData.pass}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Newform;

// point 1 = form
// point 2 = onsubmit
