import "./Mobiles.css"
const Mobile = ({mobile, handleAddToCart}) => {
    // console.log(mobile)
   const {name, image, price} = mobile;

    return (
            <div className="mobile-card">
            <h3>{name}</h3>
            <img src={image} alt="" height={150} width={120}/>
            <p>Price: {price}</p>
            <button onClick={()=>handleAddToCart(mobile)}>Add Cart</button>
        </div>
    );
};

export default Mobile;