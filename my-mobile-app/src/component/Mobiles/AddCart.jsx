import PropTypes from 'prop-types';
const AddCart = ({cart, handleRemoveFromCart}) => {
    const {name, image, price, id} = cart;
    return (
        <div className="add-card" style={{marginBottom:"2rem"}}>
            <h3>{name}</h3>
            <img src={image} alt="" height={150} width={120}/>
            <p>Price: {price}</p> 
            <div style={{display:"flex", alignItems:"center", justifyContent:'space-between'}}>
            <button>Buy Now</button>
            <button onClick={()=>handleRemoveFromCart(id)}>Remove</button>
            </div>
            </div>
    );
};

AddCart.propTypes = {
    cart: PropTypes.object.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default AddCart;