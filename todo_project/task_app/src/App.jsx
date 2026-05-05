import React from 'react'
import Todo from './components/Todo'
import  { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Toaster></Toaster>
    <Todo/>
    </div>
  )
}

export default App
