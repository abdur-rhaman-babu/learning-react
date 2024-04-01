import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then((res)=> res.json())
        .then((data)=> setBlogs(data))
    },[])

    return (
        <div>
            <h1 className="text-4xl font-semibold">Blogs</h1>
            {
                blogs && blogs.map((blog)=> <Blog key={blog.id} blog = {blog}/>)
            }
        </div>
    );
};

export default Blogs;