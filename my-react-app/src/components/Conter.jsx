import { useState } from "react";

const Conter = () => {
    const [count, setCount] = useState(0)
    const add = () =>{
        setCount(count + 1)
        // setCount((c)=> c+1)
    }
    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={add}>Add</button>
            <button onClick={()=>setCount(count - 1)}>Reduce</button>
        </div>
    );
};

export default Conter;