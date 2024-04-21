/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
const User = ({user}) => {
const navigate = useNavigate()
const {name,username,email,id} = user;
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>{username}</p>
            <li>{email}</li>
            {/* <Link to = {`/users/${id}`}>Show Details</Link> */}
            <button onClick={()=>navigate(`${id}`)}>Show Details</button>
        </div>
    );
};

export default User;