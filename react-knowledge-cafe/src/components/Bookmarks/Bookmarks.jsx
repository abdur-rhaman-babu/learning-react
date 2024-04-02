import PropTypes from 'prop-types';
import { MdDelete } from "react-icons/md";
const Bookmarks = ({bookmark, hundleRemoveFromBookmark}) => {
    // console.log(bookmark)
    const {title,cover,id} = bookmark;
    
    return (
            <div className='my-4 '>
            <img src={cover} alt="" />
            <div className='flex bg-white justify-between p-5'>
            <h1 className=' text-center font-semibold'>{title}</h1>
            <button onClick={()=>hundleRemoveFromBookmark(id)}><MdDelete /></button>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.object.isRequired,
    hundleRemoveFromBookmark: PropTypes.func.isRequired
}

export default Bookmarks;