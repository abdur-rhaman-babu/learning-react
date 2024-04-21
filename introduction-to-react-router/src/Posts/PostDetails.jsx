import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const navigate = useNavigate()
    const post = useLoaderData()
    return (
        <div>
            <h1>This post details</h1>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={()=>navigate(-1)}>x</button>
        </div>
    );
};

export default PostDetails;