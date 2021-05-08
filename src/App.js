import React from 'react';
import './App.css';
import Posts from './Components/posts';
import Blogs from './Components/blogs';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1>Welcome to the messageboard please feel free to leave a message...</h1>
      <Posts />
      <Blogs />
      <Blogs />
      <Blogs />
      <Blogs />
    </div>
  );
}}

export default App;
