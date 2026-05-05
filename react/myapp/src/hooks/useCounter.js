import { useState } from "react"


const useCounter = (initialValue= 0) => {
    const [num,setNum] = useState(initialValue)
    const increment = ()=>{setNum(num+1)}
    const decrement = ()=>{setNum(num-1)}
  return {
    num,
    increment,
    decrement
  }
}

export default useCounter;
