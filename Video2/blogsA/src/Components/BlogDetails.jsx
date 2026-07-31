import React from "react";
import { NavLink } from "react-router-dom";


const BlogDetails=()=>{
    return(
        <div>
            <NavLink to={`/blog/${post.id}`}>
             <span>{post.title}</span>
            </NavLink>
            <p>
               By <span>{post.author}</span> on {" "}
               <Navlink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span>{post.category}</span>
                </Navlink> 
            </p>
            <p>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div>
                {post.tags.map((tag) =>(
                    <NavLink to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span>{`#${tag}`}</span>
                    </NavLink>
                ))}
            </div>

        </div>
    )
}

export default BlogDetails;