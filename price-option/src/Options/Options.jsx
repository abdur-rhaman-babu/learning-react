import { useEffect, useState } from "react";
import Option from "../Option/Option";

const Options = () => {
    const [options, setOptions] = useState([])
    // console.log(options)
    useEffect(()=>{
        fetch('option.json')
        .then((res)=>res.json())
        .then((data)=> setOptions(data))
    },[])

    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-5'>Welcome to my Gymnasium</h1>
            <div className="md:grid grid-cols-3 gap-5 w-3/4 mx-auto">
            {
                options && options.map((option)=><Option key={option.id} option = {option}/>)
            }
            </div>
        </div>
    );
};

export default Options;