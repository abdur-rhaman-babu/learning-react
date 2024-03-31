import { useState } from "react";
import "./Mobiles.css"
import { useEffect } from "react";
import Mobile from "./Mobile";
import { addToLS, getDataFromLS, removeFromLS } from "../Utils/localstorage";
import AddCart from "./AddCart";

const Mobiles = () => {
    const [mobiles, setMobiles] = useState([])
    const [carts, setCart] = useState([])
   
    // console.log(mobiles)
    useEffect(()=>{
        fetch('mobile.json')
        .then((res)=> res.json())
        .then((data)=> setMobiles(data))
    }, [])

    useEffect(()=>{
        if(mobiles.length > 0){
            const getStorCart = getDataFromLS()
            // console.log(getStorCart)

            const savedCart = []
            for (const id of getStorCart){
                // console.log(id)
                const mobile = mobiles.find((mobile)=> mobile.id === id)
                // if (mobile){
                    savedCart.push(mobile)
                // }
            }
            setCart(savedCart)
        }
    } ,[mobiles])

    // remove form add cart
    const handleRemoveFromCart = (id) =>{
        const filtered = carts.filter((cart)=> cart.id !==id)
        setCart(filtered)
        removeFromLS(id)
    }


    const handleAddToCart = (mobile) =>{
        const newCart = [...carts, mobile]
        setCart(newCart)
        addToLS(mobile.id)
    }

    return (
       <div>
        <h3>Mobile: {mobiles.length}</h3>
        <h3>Add Cart: {carts.length}</h3>
        <div className="mobile-container">
        {
            carts && carts.map((cart)=>
            <AddCart key={cart.id} 
            cart = {cart}
            handleRemoveFromCart= {handleRemoveFromCart}
            />)
        }
        </div>
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