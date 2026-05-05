import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const {productId} = useParams()

  return (
    <div>
        <h2>Id:- {productId}</h2>
     <h1>Products</h1> 
    </div>
  )
}

export default Product
