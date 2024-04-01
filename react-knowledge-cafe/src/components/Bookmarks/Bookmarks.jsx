import PropTypes from 'prop-types';
import { MdDelete } from "react-icons/md";
const Bookmarks = ({bookmark}) => {
    // console.log(bookmark)
 
    const {title,cover} = bookmark;
    return (
        <div className='my-4 '>
            <img src={cover} alt="" />
            <div className='flex bg-white justify-between p-5'>
            <h1 className=' text-center font-semibold'>{title}</h1>
            <button><MdDelete /></button>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmarks;