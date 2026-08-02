import React from "react";
import {FcDeleteDatabase} from "react-icons/fc";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/cartSlice";


const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch();


  const removeFromCart=()=>{
      dispatch(remove(item.id));
      toast.success("Item remove from cart")
  }


  return(
    <div>

        <div>
          <img src={item.image}/>

        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>

          <div>
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase></FcDeleteDatabase>
            </div>
          </div>
        </div>

    </div>
  )
};

export default CartItem;
