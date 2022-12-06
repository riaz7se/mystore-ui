import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItemAdd } from "../cart/cartSlice";

const MyStore = () => {
  const dispatch =  useDispatch();
  const storeItems = useSelector((state) => state.storeItems);

  const addItemToCart = (item) => {
    dispatch(
      cartItemAdd({
        cartId: nanoid(),
        ...item
      })
    )
  }

  const itemsList = storeItems.allItems.map((item, index) => {
    return (
      <ul key={index}>
        <li>{item.itemName} [{item.price}]
            <button onClick={() => addItemToCart(item)}>
                +
            </button>
        </li>
      </ul>
    );
  });

  return (
    <div className="my-store-items">
      <h2>My Store Items: {storeItems.allItems.length}</h2>
      <span>
        List of Items
        {storeItems.allItems && 
            <div>{itemsList}</div>
        }
      </span>
    </div>
  );
};

export default MyStore;