import React from 'react';


const Blogslist = (props) => {
    return (
        
            <div className="posts">
                <h2>{props.blogs.title}</h2>
                <p>{props.blogs.content}</p>
                <button onClick={() => props.delete(props.blogs.id)}>Remove Post</button>
            </div>
    
    )
}

export default Blogslist;