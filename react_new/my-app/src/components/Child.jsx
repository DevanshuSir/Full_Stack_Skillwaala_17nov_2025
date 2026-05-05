import React from 'react'

const Child = ({name = "Guest"}) => {
    // console.log(props)
    // const {name} = props

    // props.name = "manny"

    

  return (
    <div>
      {/* <h1>Child Comp - 🫵 {name} is {userAge} years old</h1>
      <h2>{married ? "True" : "false"}</h2> */}
      <h1>{name}</h1>
    </div>
  )
}

export default Child
