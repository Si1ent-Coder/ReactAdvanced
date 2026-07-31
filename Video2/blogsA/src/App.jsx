import React, { useContext, useEffect } from "react";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { AppContext } from "./Context/AppContext";
import { Routes,Route, useSearchParams ,useLocation} from "react-router-dom";

import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import TagPage from "./Pages/TagPage";


const App=()=>{
  const [searchParams,setSearchParams] = useSearchParams(); 
  const location = useLocation();
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      // iska matlab tag wala page show karna h
        const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
        fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
    
  },[location.pathname,location.search]);

  return(
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog/:blogId' element={<BlogPage></BlogPage>}></Route>
        <Route path='/blog/:tag' element={<TagPage></TagPage>}></Route>
        <Route path='/category/:category' element={<CategoryPage></CategoryPage>}></Route>
      </Routes>
  )
}

export default App;