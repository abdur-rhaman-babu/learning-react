import { useEffect, useState } from "react";
import Blog from "./Blog";
import Bookmarks from "../Bookmarks/Bookmarks";
import { addToLS, getDataFromLS, removeDataFromLS } from "../Utils/LocalStroage";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [bookmarks, setBookmarks] = useState([])
    const [read, setRead] = useState(0)
    
    useEffect(()=>{
        fetch('blog.json')
        .then((res)=> res.json())
        .then((data)=> setBlogs(data))
    },[])

    useEffect (()=>{
        if(blogs.length > 0){
            const getStoredBookmark = getDataFromLS()
            const savedBookmark = []
            for(const id of getStoredBookmark){
                const findData = blogs.find((blog)=>blog.id === id)
                savedBookmark.push(findData)
            }
            setBookmarks(savedBookmark)
        }
    },[blogs])

    // add book mark
    const hundleBookmark = (blog) =>{
        const newBookmark = [...bookmarks, blog]
        setBookmarks(newBookmark)
        addToLS(blog.id)
    }
    
    // remove from book mark
    const hundleRemoveFromBookmark = (id) =>{
        const filtered = bookmarks.filter((bookmark)=> bookmark.id !== id)
        setBookmarks(filtered)
        removeDataFromLS(id)
    }

    const hundleReadingTime = (time) =>{
        setRead(read + time)
    }

    return (
        <div className="flex max-w-7xl mx-auto my-8">
          <div>
          {
                blogs && blogs.map((blog)=> 
                <Blog key={blog.id} 
                blog = {blog}
                hundleBookmark = {hundleBookmark}
                hundleRemoveFromBookmark = {hundleRemoveFromBookmark}
                hundleReadingTime = {hundleReadingTime}
                />)
            }
          </div>
            <div className="w-1/4 bg-[#eee]">
                <h1 className="border-solid border-2 
                    border-blue-600 text-center p-3 
                    rounded font-semibold text-xl">Spend time on read: {read}</h1>
                
                <h1 className="font-semibold my-3 p-4 text-center
                 bg-orange-700 text-2xl text-white" >Total Bookmark: {bookmarks.length}</h1>
            {
                bookmarks && bookmarks.map((bookmark)=> 
                <Bookmarks key={bookmark.id} 
                bookmark = {bookmark}
                hundleRemoveFromBookmark = {hundleRemoveFromBookmark}
                />)
            }
            </div>
        </div>
    );
};

export default Blogs;