import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const BlogPage=()=>{
    const [blog,setBlog] = useState(null);
    const[relatedblogs,setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigation();
    const {loading,setLoading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${baseUrl}?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.setRelatedBlogs);
        }
        catch(error){
            console.log("error");
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location,pathname])

    return(
        <div>
            <Header></Header>
            <div>
                <button onClick={() => navigation(-1)}>Back</button>
            </div>
            {
                loading ? (<div>
                    <p>Loading</p>
                </div>)  :
                blog ? (
                    <div>
                        <BlogDetails post={blog}></BlogDetails>
                        <h2>Related Blogs</h2>
                        {
                            relatedblogs.map((post) =>(
                                <div key={post.id}>
                                   <BlogDetails post={post}></BlogDetails> 
                                </div>
                            ))
                        }
                    </div>
                ) : (<div>
                    <p>No blog Found</p>
                </div>)
            }

        </div>
    )
}


export default BlogPage;