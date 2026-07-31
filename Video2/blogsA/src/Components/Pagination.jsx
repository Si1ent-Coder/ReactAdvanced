import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";


const Pagination=()=>{
  const {page,handlePageChange,totalPages} = useContext(AppContext);

  return(
    <div className="w-full flex justify-center item-center border fixed bottom-0 bg-white">  
      <div className="flex flex-row justify-between w-11/12 max-w-[670px] py-2">
      <div className="flex gap-x-2 ml-6">
        { page > 1 &&
        <button onClick={() => handlePageChange(page-1)} className="rounded-md border px-4 py-1">Previous</button>
        } 
        {page<totalPages &&
            <button onClick={() => handlePageChange(page+1)} className="rounded-md border px-3 py-1">Next</button>
        }
        </div>
        <p className="font-bold text-sm">
          page {`${page}`} of 6
        </p>

      </div> 
    </div>
  )
}

export default Pagination;