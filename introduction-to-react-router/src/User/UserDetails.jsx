import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const navigate = useNavigate()
    const user = useLoaderData()
    console.log(user)
    return (
        <div>
            <h1>{user.name}</h1>
            <button onClick={()=>navigate(-1)}>x</button>
        </div>
    );
};

export default UserDetails;