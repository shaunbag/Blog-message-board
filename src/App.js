import React from 'react';
import './App.css';
import Posts from './Components/posts';
import Blogs from './Components/blogs';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1>I am the Blog Page</h1>
      <Posts />
      <Blogs />
    </div>
  );
}}

export default App;
