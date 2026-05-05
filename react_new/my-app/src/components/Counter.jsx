import React, { useState } from 'react'

const Counter = () => {

    const [counter,setCounter] = useState(10)
    const [isOn,setIsOn] = useState(true)

    function handleIncrement(){
        setCounter(counter+1)
    }

    function handleDecrement(){
        setCounter(counter-1)
    }



  return (
    <div style={{textAlign:"center"}}>
      <h1>Counter App</h1>
      <button onClick={handleIncrement}>Increment</button>
      <h2>{counter}</h2>
      {counter>20 ? <p>Yahooo...🤴</p>:<p>❤️</p>}
      <button onClick={handleDecrement}>Decrement</button>

    <button
    onClick={()=>{setIsOn(!isOn)}}
    style={{display:"block"}}>{isOn?"On🟢":"Off🛑"}</button>

    </div>
  )
}

export default Counter
