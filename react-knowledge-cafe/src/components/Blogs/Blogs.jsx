import { useEffect, useState } from "react";
import Blog from "./Blog";
import Bookmarks from "../Bookmarks/Bookmarks";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [bookmarks, setBookmarks] = useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then((res)=> res.json())
        .then((data)=> setBlogs(data))
    },[])

    // add book mark
    const hundleBookmark = (blog) =>{
        const newBookmark = [...bookmarks, blog]
        setBookmarks(newBookmark)
    }


    return (
        <div className="flex max-w-7xl mx-auto my-8">
          <div>
          {
                blogs && blogs.map((blog)=> 
                <Blog key={blog.id} 
                blog = {blog}
                hundleBookmark = {hundleBookmark}
                />)
            }
          </div>
            <div className="w-1/4 bg-[#eee]">
                <h1 className="border-solid border-2 border-blue-600 text-center p-3 rounded font-semibold text-2xl">Spend time on read:</h1>
                <h1 className="font-semibold my-3 p-4 text-center bg-orange-700 text-2xl text-white" >Total Bookmark: {bookmarks.length}</h1>
            {
                bookmarks && bookmarks.map((bookmark)=> 
                <Bookmarks key={bookmark.id} 
                bookmark = {bookmark}
                />)
            }
            </div>
        </div>
    );
};

export default Blogs;