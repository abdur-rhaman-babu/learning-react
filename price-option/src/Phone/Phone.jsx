import axios from "axios";
import { useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
const Phone = () => {
    const [phone, setPhone] = useState([])
    const [loading, setLoading] = useState(true)
    // console.log(phone)
  useEffect(()=>{
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then((data)=> {
        const phoneData = data.data.data;
        const phonewithfakeData = phoneData.map((phone)=>{
            const obj = {
                name:phone.phone_name,
                price:parseInt(phone.slug.split('-')[1])
            }
            return obj
        })
        setPhone(phonewithfakeData)
        setLoading(false)
    })
  },[])
    return (
        <div> 
            {
                loading && <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
            }

            <h1>welcome to phone component</h1>
            <div>
            <BarChart width={1200} height={400} data={phone}>
                <XAxis dataKey='name'/>
                <Tooltip/>
                <legend/>
                <YAxis/>
            <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
            </div>
        </div>
    );
};

export default Phone;