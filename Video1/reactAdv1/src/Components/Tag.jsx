import React, { useEffect, useState } from "react";
import axios from "axios";

import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";



const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Tag=()=>{

    // const [gif,setGif] = useState(null);
    const [tag,setTag] = useState('cat')
    // const [loading ,setLoading] = useState(false);

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    //     const {data} = await axios.get(url);
    //     const imageSource  = data.data.images.downsized_large.url;
    //     setLoading(false);
    //     setGif(imageSource);
    // }

    // // console.log(API_KEY);

    // useEffect(()=>{
    //     fetchData();
    // },[])

    function clickHandler(){
        fetchData();
    }

    function changeHandler(event){
        setTag(event.target.value);
    }

    const {gif,loading,fetchData} = useGif({tag});

    return(
        <div className="w-1/2 mx-auto bg-blue-500   rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random Gif</h1>
            {
                loading ? (<Spinner></Spinner>):(<img src={gif} height={200}/>)
            }

            <input className="w-10/12 bg-white py-2 rounded-lg mb-[6px] text-center" onChange={changeHandler} value={tag}/>

            <button onClick={clickHandler} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[15px]">
                Generate
            </button>

        </div>
    )
}


export default Tag;