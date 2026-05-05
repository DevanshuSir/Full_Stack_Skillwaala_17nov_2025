import useCounter from "../hooks/useCounter"

const Counter1 = () => {

  const {num,increment,decrement} = useCounter(50)
  
  return (
    <div>
      <h1>Custom Hooks</h1>
      <h2>{num}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} >Decrement</button>
    </div>

  )
}

export default Counter1;