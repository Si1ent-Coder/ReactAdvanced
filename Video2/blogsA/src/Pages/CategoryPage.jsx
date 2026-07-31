import React from "react";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";
import { useNavigation,useLocation } from "react-router-dom";

const CategoryPage=()=>{
    const navigation = useNavigation();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    return(
        <div>
            <Header></Header>
            <div>
                <button onClick={() => navigation(-1)}>
                    Back
                </button>
                <h2>
                    Blogs on <span>{category}</span>
                </h2>
            </div>
            <Blogs></Blogs>
            <Pagination></Pagination>
        </div>
    )
}


export default CategoryPage;