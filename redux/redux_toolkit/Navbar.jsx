import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const cartTotal = useSelector((state)=>state.Cart.cartValue)
    console.log(cartTotal)

  return (
    <div>
      <div style={{background:"orange",padding:"20px"}}>
        <button>Cart :- {cartTotal.length}</button>
      </div>
    </div>
  )
}

export default Navbar
