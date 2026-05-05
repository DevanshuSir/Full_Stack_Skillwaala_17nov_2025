import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./feature/cart/cartSlice";

const Product = () => {

    const dispatch = useDispatch()

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {["apple","banana","kiwi","Orange"].map((item, index) => (
        <div className="product" key={index}>
          <h4>Shopping Product :- {item} </h4>
          <button onClick={()=>{dispatch(addToCart({product:item}))}}>Add To Cart 👋</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
