import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const[loading,setLoading] = useState(false);
  const[post,setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    }
    catch(error){
      console.log("Errro  aagaya");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[]);

  return(
    <div>
      {
        loading ? <Spinner></Spinner> : post.length >0 ?
        (<div className="grid grid-cols-4 max-w-5xl p-2 mx-auto space-x-5 space-y-10 min-h-[80vh] ">
          {
        post.map((pos) => ( 
          <Product key={pos.id} post={pos}></Product>
        )) 
      } 
        </div>) : <div className="flex justify-center items-center "> <p>No Data Found</p></div>

      }


    </div>
  )
};

export default Home;
