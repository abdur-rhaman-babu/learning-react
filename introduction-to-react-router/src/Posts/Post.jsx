import {useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
const Post = ({post}) => {
    const navigate = useNavigate()
    const {body,title,id} = post;

    const handleShowDetails = ()=>{
        navigate(`${id}`)
    }

    return (
        <div className="user-card">
            <h3>{title}</h3>
            <p>{body}</p>
           
            <button onClick={handleShowDetails}>Show details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;