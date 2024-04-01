import  PropTypes  from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog, hundleBookmark}) => {
    // console.log(bookmarks)
   
    const {cover,author_img, author, posted_date, reading_time,title, hashtags} = blog;
    return (
        <div className='w-3/4'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex items-center justify-between my-4'>
                <div className='flex items-center gap-4 cursor-pointer'>
                    <img className='rounded-full border border-red-400' src= {author_img} alt="" height={70} width={70} />
                    <div>
                        <h3 className='text-2xl font-semibold'>{author}</h3>
                        <p className='cursor-text'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p>{reading_time} min read</p>
                        <button onClick = {()=>hundleBookmark(blog)}
                        className='cursor-pointer'>
                        <CiBookmark /> 
                        </button>        
                </div>
            </div>
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <p className='my-4'>#{hashtags.join(' #')}</p>
            <p className='mb-5 text-blue-800 underline cursor-pointer' href="">Mark as read</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    hundleBookmark: PropTypes.func.isRequired
}

export default Blog;