import React from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { addToCart } from "./redux/actions/shoppingCart-action";
import { ADD_TO_CART } from "./redux/action-types/getShoeData";
let USD = (new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}))

export default function Product(props) {
    const dispatch = useDispatch();
  const productPageShoes = useSelector((state) => state.ShoeData);
  console.log(productPageShoes);
  const shoeDataName = productPageShoes.shoeData;
  console.log(shoeDataName)


  return (
      
    <div className="productMainContainer">
        <h1 className="productHeadText">Recently Added Products</h1>
        <p>Page 1 of 1</p>
        
      
        <div className="productContainer">
        {Object.keys(shoeDataName).map((key) => (
          <div className="productShoeDivs" key={key}>
            {" "}
            <div className="productShoeDivRow1">
            <img className="productPageImages"src={shoeDataName[key].media.thumbUrl} alt="" />
            </div>
            <div className="productShoeDivRow2">
            <h1 className="productText">{shoeDataName[key].brand}</h1>
              <h4 className="productText">{shoeDataName[key].name}</h4>
              {/* <p className="productText">In Stock</p> */}
              
              <p className="productText">{USD.format(shoeDataName[key].retailPrice)}</p>

              <button type="button" class="btn btn-dark" onClick={()=>dispatch({type:ADD_TO_CART, payload:{id:shoeDataName[key].id,image:shoeDataName[key].media.thumbUrl,brand:shoeDataName[key].brand,name:shoeDataName[key].title,price:shoeDataName[key].retailPrice,} })}>Add To Cart</button>

            </div>
           
            {/* <div className="secondRow"></div> */}
            
          </div>
          
        ))}
        
      
      
        </div>
      
    </div>
  );
}
