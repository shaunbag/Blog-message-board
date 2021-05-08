import React from 'react';

const Posts = () => {
    return (
        <div className="form">
            <form method="GET">
                <input placeholder="Title"></input>
                <br></br>
                <input placeholder="Content"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )    
}

export default Posts;