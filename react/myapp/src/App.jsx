import React, { lazy, Suspense, useState } from 'react'

const Data = lazy(()=>import('./lazy/Data'))

const App = () => {

    const [load,setLoad] = useState(false)

  return (
    <div>
      <h1>Lazy Loading....</h1>
      <button onClick={()=>{setLoad(true)}}>Data</button>
      {
        load ? 
        <Suspense fallback={<h1>Loading Data....</h1>}>
          <Data/>
        </Suspense>
         : null
      }




    </div>
  )
}

export default App


// lazy 
// redux

