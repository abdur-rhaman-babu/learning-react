import { useState } from "react";
import "./Mobiles.css"
import { useEffect } from "react";
import Mobile from "./Mobile";
const Mobiles = () => {
    const [mobiles, setMobiles] = useState([])
    const [carts, setCart] = useState([])
   
    // console.log(mobiles)
    useEffect(()=>{
        fetch('mobile.json')
        .then((res)=> res.json())
        .then((data)=> setMobiles(data))
    }, [])

    const handleAddToCart = (mobile) =>{
        const newCart = [...carts, mobile]
        setCart(newCart)
    }

    return (
       <div>
        <h3>Mobile: {mobiles.length}</h3>
        <h3>Add Cart: {carts.length}</h3>
        {
            carts && carts.map((cart)=> <div className="mobile-card">
            <h3>{cart.name}</h3>
            <img src={cart.image} alt="" height={150} width={120}/>
            <p>Price: {cart.price}</p> 
            <button>Buy Now</button>
            </div>)
        }
         <div className="mobile-container">
            {
                mobiles && mobiles.map((mobile)=> 
                <Mobile key={mobile.id} 
                mobile = {mobile} 
                handleAddToCart = {handleAddToCart}
                />)
            }
        </div>
       </div>
    );
};

export default Mobiles;