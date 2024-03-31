import PropTypes from 'prop-types';
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

Mobile.propTypes = {
    mobile: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Mobile;