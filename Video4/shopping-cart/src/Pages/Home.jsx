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
        (<div>
          {
        post.map((pos) => ( 
          <Product key={pos.id} post={pos}></Product>
        )) 
      } 
        </div>) : <div> <p>No Data Found</p></div>

      }


    </div>
  )
};

export default Home;
