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
      console.log(response.blogs);
      this.setState({
        blog: response.blogs
      })
    })
  } 
  

  render(){
  return (
    <div className="App">
      <h1>Welcome to the messageboard please feel free to leave a message...</h1>
      <Posts />
      <Blogs blog={this.state.blog}/>
      
    </div>
  );
}}

export default App;
