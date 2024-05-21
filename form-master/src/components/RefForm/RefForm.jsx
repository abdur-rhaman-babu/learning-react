import { useEffect, useRef, useState } from "react";

const RefForm = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [error, setError] = useState('')

    const hundleSubmit = (e) =>{
        e.preventDefault()
        if(passwordRef.current.value.length < 6 ){
            setError('password must be six character or longer')
        }
        else{
            setError('')
            console.log(nameRef.current.value)
            console.log(emailRef.current.value)
            console.log(passwordRef.current.value)
        }
    }

    useEffect(() => {
      nameRef.current.focus()
    }, [])
    
    
    return (
        <>
            <form onSubmit={hundleSubmit}>
                <input type="text"
                ref={nameRef}
                />
                <br />
                <input type="email"
                ref={emailRef}
                />
                <br />
                <input type="password"
                ref={passwordRef}
                />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p>{error}</p>
        </>
    );
};

export default RefForm;