import React from 'react';

class Posts extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            content: ''
        }

    }

    handleSubmit = (event) => {
        
        const bodyState = this.state 
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(bodyState)          
        }
        fetch ('http://localhost:5000/api/posts', options);
        console.log(options)
        //event.preventDefault();
    }

    handleChangeContent = (event) => {
        this.setState({content: event.target.value}); 
    }

    handleChangeTitle = (event) => {
        this.setState({title: event.target.value});
    }


    render(){
    return (
        <div className="form">
            <form method="POST" onSubmit={this.handleSubmit}>
                <label>Title : </label>
                <input placeholder="Title" name="title" onChange={this.handleChangeTitle}></input>
                <label>Message : </label>
                <input placeholder="Content"  name="content" onChange={this.handleChangeContent}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )    
}}

export default Posts;