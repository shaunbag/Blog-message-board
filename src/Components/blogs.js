import React from 'react';
import Blogslist from './blogsList';

const Blogs = (props) => {
    return (
        <div>
            {
                props.blog.slice(0).reverse().map(blogs => { // .map function will reverse the blogs to display the most recent at the top
                   return <Blogslist key={blogs.id} blogs={blogs} delete={props.delete}/>
                })
            }
        </div>
    )
}

export default Blogs;