import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'

// import './App.css';

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
   fetch('http://localhost:4000/blogs')
   .then(resp => resp.json())
   .then(allBlogs => setBlogs(allBlogs))
  },[])
  console.log(blogs)

  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
}


export default App;
