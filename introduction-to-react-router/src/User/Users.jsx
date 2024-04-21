import {useLoaderData} from "react-router-dom"
import User from "./User";
import './Users.css'
const Users = () => {
    const users = useLoaderData()
    // console.log(users)
    return (
        <div>
            <h1 style={{textAlign:'center', marginBottom:'1rem'}}>You are honest user</h1>
            <div className="container">
            {
                users && users.map((user)=> <User key={user.id} user = {user}/>)
            }
            </div>
        </div>
    );
};

export default Users;