import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../Redux/Slices/cartSlice";
import { toast } from "react-toastify";

const Product = ({post}) => {

  const cart = useSelector((state)=>state.cart);
  const dispatch = useDispatch();

  const addToCart =() =>{
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    console.log("Removing:", post.id);
    dispatch(remove(post.id));
    toast.success("Item removed from Cart");
}

// shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]
  return(
      <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in  gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] h-[320px]">
        <div>
          <p className="text-gray-600 font-semibold text-lg lext-left truncate w-40 mt-1">{post.title}</p>
        </div>

        <div>
          <p className="w-40 h-10 overflow-hidden text-gray-400 text-[10px] text-left">
          {post.description.split(" ").slice(0,10).join(" ") + "..."}
          </p>
        </div>
        <div className="h-[140px] flex items-center justify-center">
          <img
            src={post.image}
            className="h-full w-full object-contain"
            alt={post.title}
          />
        </div>

        <div className="flex justify-between gap-4 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>

        {/* button for add to cart or remove from the cart */}
    
        
        {
          cart.some((p) => p.id === post.id) ? (
            <button onClick={removeFromCart} className="text-gray-700 border-2 border-gray-700 font-semibold text-[10px] px-2 py-1 uppercase rounded hover:bg-gray-700 hover:text-white  transition duration-300 ease-in ">
              Remove Item
            </button>
          ) : (
            <button onClick={addToCart} className="text-gray-700 border-2 border-gray-700 font-semibold text-[10px] px-2 py-1 uppercase rounded hover:bg-gray-700 hover:text-white  transition duration-300 ease-in ">
              Add to Cart
            </button>
          )
        }


      </div>
      </div>
  )
};

export default Product;
