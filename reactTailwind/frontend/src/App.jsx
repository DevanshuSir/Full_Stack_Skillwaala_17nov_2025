import React, { createContext } from 'react'
import ChildOne from './components/ChildOne'


const data = createContext()

const App = () => {
  // Create Provide Consume 
  let userName = "Devanshu"

  return (
    <div>
      <data.Provider value={userName}>
      <h2 className='text-center text-5xl font-bold'>Prop Drill</h2>
      <ChildOne />
      </data.Provider>
    </div>
  )
}


export {data}
export default App
