import { useState } from "react";
const StateFullForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const hundleSubmit = (e) =>{
        e.preventDefault()
       
        if(password.length < 6){
            setError('Password must be 6 character or longer')
        }else{
            setError('')
            console.log(name, email, password)
        }

    }

    const nameChangeHandler = (e) =>{
        setName(e.target.value)
    }

    return (
        <>
            <form onSubmit={hundleSubmit}>
                <input type="text" 
                value={name}
                onChange={nameChangeHandler}
                />
                <br />
                <input type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                 />
                <br />
                <input type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p>{error}</p>
        </>
    );
};

export default StateFullForm;