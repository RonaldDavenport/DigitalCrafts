import React from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { addToCart } from "./redux/actions/shoppingCart-action";
import { ADD_TO_CART } from "./redux/action-types/getShoeData";

export default function Product(props) {
    const dispatch = useDispatch();
  const productPageShoes = useSelector((state) => state.ShoeData);
  console.log(productPageShoes);
  const shoeDataName = productPageShoes.shoeData;
  console.log(shoeDataName)

  return (
      
    <div className="productMainContainer">
        <h1>Products</h1>
        
      
        <div className="productContainer">
        {Object.keys(shoeDataName).map((key) => (
          <div className="productShoeDivs" key={key}>
            {" "}
            <img className="productPageImages"src={shoeDataName[key].media.thumbUrl} alt="" />
            <h1>{shoeDataName[key].name}</h1>
            <button onClick={()=>dispatch({type:ADD_TO_CART, payload:{id:shoeDataName[key].id} })}>Add To Cart</button>
          </div>
        ))}
        </div>
      
    </div>
  );
}
