import React, { useContext } from 'react'
import ChildThree from './ChildThree'
import { anotherData } from '../App'

const ChildTwo = () => {
  let userage =  useContext(anotherData)
  return (
    <div>
      <h2>ChildTwo Comp.. {userage}</h2>
      <ChildThree/>
    </div>
  )
}

export default ChildTwo
