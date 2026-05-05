import React, { useState } from 'react'
import Data from './lazy/Data'

const App = () => {

    const [load,setLoad] = useState(false)

  return (
    <div>
      <h1>Lazy Loading....</h1>
      <button onClick={()=>{setLoad(true)}}>Data</button>
      {
        load ? <Data/> : null
      }

    </div>
  )
}

export default App
