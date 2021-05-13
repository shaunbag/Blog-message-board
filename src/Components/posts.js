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
        alert('A form was submitted: ' + this.state );
        const bodyState = JSON.stringify(this.state) 
        console.log(bodyState);
        fetch ('http://localhost:4000/api/posts', {
            method: 'POST',
            body: bodyState           
        }).then(function(response){
            console.log(response);
            return response.json();
        })

        event.preventDefault();
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
            <form method="GET" onSubmit={this.handleSubmit}>
                <input placeholder="Title" name="title" onChange={this.handleChangeTitle}></input>
                <input placeholder="Content"  name="content" onChange={this.handleChangeContent}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )    
}}

export default Posts;