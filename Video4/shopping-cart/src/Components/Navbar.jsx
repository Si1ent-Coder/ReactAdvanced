import React from "react";
import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state)=>state.cart);
  return(
    <div>
    <nav className="flex justify-between mx-auto h-16 max-w-4xl">

        <div className="flex items-center">
        <NavLink to="/">
            <img src="../logo.png" className="h-14"/>
        </NavLink>
        </div>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

          <NavLink to="/cart">
            <div className="relative text-2xl">
          <FaShoppingCart ></FaShoppingCart>
          <span className="absolute bottom-1 left-2  text-blue-500">{cart.length}</span>
            </div>
          </NavLink>

        </div>

    </nav>
    </div>
  )
};

export default Navbar;
