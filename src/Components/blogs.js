import React from 'react';
import Blogslist from './blogsList';

const Blogs = (props) => {
    return (
        <div>
            {
                props.blog.map(blogs => {
                   return <Blogslist key={blogs.id} blogs={blogs}/>
                })
            }
        </div>
    )
}

export default Blogs;