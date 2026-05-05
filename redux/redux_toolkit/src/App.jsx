import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './feature/counter/counterSlice'
import Form from './Form'
import Product from './Product'
import Navbar from '../Navbar'

const App = () => {
  const count = useSelector((state)=>state.Counts.count)
  const dispatch = useDispatch()
  return (
    <div>
      <Navbar/>
      <h1>Redux Toolkit 😍</h1>
      <h2>{count}</h2>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>|
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <Form/>

      <Product/>
    </div>
  )
}

export default App



