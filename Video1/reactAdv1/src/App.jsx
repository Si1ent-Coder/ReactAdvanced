import React from "react";
import Random from "./Components/Random";

import Tag from "./Components/Tag";


const App=()=>{
    return(
        <div className="w-full flex flex-col background relative items-center">
            <h1 className="bg-white rounded-lg  w-11/12  mt-8 py-2  text-center text-2xl font-bold">Random GIFS</h1>
             <div className="flex flex-col w-full gap-y-10 mt-[30px]">
                <Random></Random>
                <Tag></Tag>
             </div>

        </div>
    )
}

export default App;