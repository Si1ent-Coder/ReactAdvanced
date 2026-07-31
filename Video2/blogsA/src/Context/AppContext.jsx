import React, { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// step1

export const AppContext = createContext();


export default function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [post,setPost] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    // data filling

    async function fetchBlogPosts(page = 1,tag=null,category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url+=`&tag=${tag}`;
        }
        if(category){
            url+=`&category=&{category}`;
        }
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPost(data.posts);
            setTotalPages(data.totalPages);

        }
        catch(error){
            alert("Error in fetching data");
            setPage(1);
            setPost([]);
            setTotalPages(null);
        }
        setLoading(false);

    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);

    }

    
    const value = {
        post,setPost,loading,setLoading,page,setPage,totalPages,setTotalPages,fetchBlogPosts,handlePageChange
    };

    // step 2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}