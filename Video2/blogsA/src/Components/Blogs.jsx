import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";


const Blogs=()=>{

  const{loading,post} = useContext(AppContext);

  return(
    <div className="w-11/12 max-w-[600px] py-3 flex flex-col gap-y-7 mt-[65px] mb-[70px]">      
      {
        loading ? (<Spinner></Spinner>):(post.length===0 ? (<div>
          <p>No Post Found</p>
        </div>) : (post.map((pos)=>(
            
            <div key={pos.id}>
              <p className="font-bold text-sm">{pos.title}</p>
              <p className="text-sm">By <span className="italic">{pos.author}</span> on <span className="underline font-bold">{pos.category}</span></p>
              <p className="text-sm">Posted on {pos.date}</p>
              <p className="text-[14px] mt-[14px]">{pos.content}</p>


            <div className="flex gap-x-1.5">
              {
               pos.tags.map((tag,index)=>{
                return <span key={index} className="text-blue-700 underline font-bold text-sm ">{`#${tag}`}</span>
              })                
              }
              </div>
            </div>
      

        )))
        )
      }

    </div>
  )
} 

export default Blogs;