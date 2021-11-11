import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { DELETE_FROM_CART } from "./redux/action-types/getShoeData";

export default function Cart(props) {
  const cartData = useSelector((state) => state.CartInfo.Cart);
  console.log();
  const dispatch = useDispatch();
  const { shoes } = props;
  console.log("shoe title", cartData);

  return (
    <div className="cartContainer">
      <div>
        <div>
          <h1 className="productHeadText">Your Cart</h1>
        </div>
        {cartData.map((shoes) => (
          <CartItem shoes={shoes} />
        ))}
      </div>
     
    </div>
    
  )
}
