import React from 'react'
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai'
// import Moment from 'react-moment'
import { DateTime } from "luxon";
import { Link } from 'react-router-dom'
import { addDays, formatISO } from "date-fns";


 const PostItem = ({ post }) => {
    if (!post) {
        return (
            <div className='text-xl text-center text-white py-10'>
              ....Loading
            </div>
        )
    }
    return (
        <Link to={`/${post._id}`}>
            <div className='flex flex-col basis-1/4 flex-grow border rounded-md border-gray-300 '>
                <div
                    className={
                        post.imgUrl ? 'flex rouded-sm h-80' : 'flex rounded-sm'
                    }
                >
                    {post.imgUrl && (
                        <img
                            src={`http://localhost:6001/uploads/${post.imgUrl}`}
                            alt={post.imgUrl}
                            className='object-cover w-full'
                        />
                    )}
                </div>
                <div className='flex justify-between items-center p-2'>
                    <div className='text-xs text-white opacity-50'>
                        {post.username}
                    </div>
                    <div className='text-xs text-white opacity-50'>
                        {/* <Moment date={post.createdAt} format='D MMM YYYY' /> */}
                                                 {/* {post.createdAt}  */}
                                                 { post.createdAt}

                                                 {/* <Moment format='MMMM Do YYYY, h:mm:ss a'>{post.createdAt}</Moment> */}

                    </div>                      
                </div>
                <div className='text-white text-xl'>{post.title}</div>
                <p className='text-white opacity-60 text-xs pt-4 line-clamp-4'>
                    {post.text}
                </p>

                <div className='flex gap-3 items-center mt-2 p-2'>
                    <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                        <AiFillEye /> <span>{post.views}</span>
                    </button>
                    <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                        <AiOutlineMessage />{' '}
                        <span>{post.comments?.length || 0} </span>
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default PostItem