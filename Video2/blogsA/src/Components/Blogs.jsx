import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";


const Blogs=()=>{

  const{loading,post} = useContext(AppContext);

  return(
    <div className="w-11/12 max-w-[600px] py-3 flex flex-col gap-y-7 mt-[65px] m-[70px]">      
      {
        loading ? (<Spinner></Spinner>):(post.length===0 ? (<div>
          <p>No Blogs Found</p>
        </div>) : (post.map((pos)=>( 
          <BlogDetails key={post.id} post={post}></BlogDetails>
        )))
        )
      }

    </div>
  )
} 

export default Blogs;