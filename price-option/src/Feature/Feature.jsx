import  PropTypes  from 'prop-types';
import { FaArrowsAlt } from "react-icons/fa";

const Feature = ({feature}) => {
    // console.log(feature)
    return (
        <div className='text-left pl-7 flex-grow flex items-center gap-2'>
            <FaArrowsAlt />
            <p>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string.isRequired
}

export default Feature;