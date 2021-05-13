import React from 'react';


const Blogslist = (props) => {
    return (
        
            <div className="posts">
                <h2>{props.blogs.title}</h2>
                <p>{props.blogs.content}</p>
            </div>
    
    )
}

export default Blogslist;