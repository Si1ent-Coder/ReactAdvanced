import React from "react";
import {FaShoppingCart} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <div className="bg-blue-500">
    <div className="flex flex-row justify-between ">
        <NavLink to="/">
          <div>
            <img src="https://tse1.mm.bing.net/th/id/OIP.XRr7pAvoFG4PbH59uVLs5wHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3" width={50}/>
          </div>
        </NavLink>

        <div className="flex ">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

          <NavLink to="/cart">
            <div>
          <FaShoppingCart></FaShoppingCart>
            </div>
          </NavLink>

        </div>

    </div>
    </div>
  )
};

export default Navbar;
