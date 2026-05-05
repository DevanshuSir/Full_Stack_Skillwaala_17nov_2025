import React from 'react'

const ProductCard = ({pImage,title,price,inStock,add}) => {
  return (
    <div style={{border:"2px solid black", margin:"10px",padding:"10px"}}>
        <img style={{width:"100px"}} src={pImage} alt='Product-Image'/>
      <h2>Title :- {title}</h2>
      <p>Price :- {price}</p>
      <p>{inStock ? "Available":"Out-Of-Stock"}</p>
      <button onClick={add}>Add To Cart</button>
      <button>-</button><span>0</span><button>+</button>
    </div>
  )
}

export default ProductCard
