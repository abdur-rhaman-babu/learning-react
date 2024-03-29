import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([])
    console.log(users)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> res.json())
        .then((data)=> setUsers(data))
    },[])

    const styleDiv = {
        border:'2px solid yellow',
        borderRadius:'10px',
        marginTop:"10px",
        padding:"10px"
    }

    return (
        <>
            {
                users && users.map((user)=>{
                    return <div key={user.id} style={styleDiv}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.webiste}</p>
                        <p>{user.address?.city}</p>
                    </div>
                })
            }
        </>
    );
};

export default Users;