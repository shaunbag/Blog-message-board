import React from 'react';
import './App.css';
import Posts from './Components/posts';
import Blogs from './Components/blogs';
import BlogsApi from './utils/Blogsapi';

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      blog: []
    }

  };


  //On load of web page call all current messages from the database to set to state in order to post on the page

  componentDidMount(){
    BlogsApi.search().then((response) => {

      this.setState({
        blog: response.blogs
      })
    })
  } 

  // once state has updated ie. posts deleted, the page reloads new state from the blogs database
  componentDidUpdate(){
    BlogsApi.search().then((response) => {
     
      this.setState({
        blog: response.blogs
      })
    })
  } 


  // function to handle delete requests to remove messages from the board

  handleDelete(id){
    console.log(id)
    const options = {
      method: 'DELETE',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application'          
      },
      body: id
    }
      fetch ('http://localhost:4000/api/posts/'+id, options);
    
  };
  

  render(){
  return (
    <div className="App">
      <h1>Welcome to the messageboard please feel free to leave a message...</h1>
      <Posts />
      <Blogs blog={this.state.blog} delete={this.handleDelete}/>
      
    </div>
  );
}}

export default App;
