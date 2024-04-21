import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
    const posts = useLoaderData()
    // console.log(posts);
    return (
        <div>
            <h1>this is post</h1>
           <div className="container">
            {
                posts && posts.map((post)=><Post key={post.id} post = {post}/>)
            }
           </div>
        </div>
    );
};

export default Posts;