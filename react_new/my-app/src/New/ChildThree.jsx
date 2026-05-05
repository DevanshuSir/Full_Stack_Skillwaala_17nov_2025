import React, { useContext } from 'react'
import { data } from '../App'

const ChildThree = () => {
  const name = useContext(data)
  return (
    <div>
        
      <h3>ChildThree Comp.. {name}</h3>
    </div>
  )
}

export default ChildThree
