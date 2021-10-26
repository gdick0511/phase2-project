import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import CreatePost from './CreatePost'
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
      <NavBar />
        <Switch>
          <Route path="/about">  
            <About />
          </Route>
          <Route path="/createpost">  
            <CreatePost />
          </Route>
          <Route path="/">
            <Home blogs={blogs}/>
          </Route>
        </Switch>  
    </div>
  );
}


export default App;
