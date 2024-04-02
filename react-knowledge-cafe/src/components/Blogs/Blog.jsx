import  PropTypes  from 'prop-types';
import { useState } from 'react';
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";

const Blog = ({blog, hundleBookmark, hundleRemoveFromBookmark, hundleReadingTime}) => {
    // console.log(bookmarks)
   const [isMark, setIsMark] = useState(false)

    const hundleMark = () =>{
        setIsMark(!isMark)
    }

    const {cover,author_img, author, posted_date, reading_time,title, hashtags,id} = blog;
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
                    <div onClick={hundleMark}>
                        {
                            isMark ? 
                            <button className='text-red-600' onClick={()=>hundleRemoveFromBookmark(id)}>
                            <IoBookmark />
                            </button> : 
                            <button onClick = {()=>hundleBookmark(blog)}>
                            <CiBookmark />
                            </button>
                        }
                    </div>
                </div>
            </div>
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <p className='my-4'>#{hashtags.join(' #')}</p>
            <button onClick={()=>hundleReadingTime(reading_time)} className='mb-5 text-purple-800 underline cursor-pointer' href="">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    hundleBookmark: PropTypes.func.isRequired,
    hundleRemoveFromBookmark: PropTypes.func.isRequired,
    hundleReadingTime: PropTypes.func.isRequired
}

export default Blog;