import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


const Cart = () => {
    
    const cart = useSelector((state)=>state.cart);
    const [totalAmount,setTotalAmount] = useState(0);
    
    useEffect( () =>{
      setTotalAmount(cart.reduce((acc ,curr) => acc + curr.price,0));
    },[cart])

  return (
    <div>
      {
        cart.length > 0 ?
        (
          <div>
            <div>
              {
                cart.map((item,index)=>{
                  return <CartItem key={`${item.id}-${index}`} item={item} itemIndex={index}></CartItem>
                })
              }
            </div>

            <div>
              <div>
              <div>
                Your Cart
              </div>
              <div>
                Summary
              </div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>

            </div>
            <div>
              <p>Total Amount: ${totalAmount}</p>
              <button>Checkout Now</button>
            </div>


            </div>

          </div>
        ):
        (
          <div>
           <h1>Cart Empty</h1>
           <Link to={"/"}>
            <button>
            Shop Now
            </button>
           </Link>
          </div>
        )
      }

    </div>
  )
}

export default Cart;
