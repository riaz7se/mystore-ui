import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemToCart } from "../assets/actions/MyStoreActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state).cartReducer;
  
  const itemsList = cart.cartItems.map((item, index) => {
    console.log("cartItems: ", cart);
    return (
      <ul key={index}>
        <li>
          {item.itemName} [{item.price}]
          <button onClick={() => dispatch(deleteItemToCart(item))}>-</button>
        </li>
      </ul>
    );
  });

  return (
    <div className="cart">
      <h2>Cart Items: </h2>
      {itemsList && <div>{itemsList}</div>}
    </div>
  );
};

export default Cart;
