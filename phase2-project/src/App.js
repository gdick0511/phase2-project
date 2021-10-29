import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import CreatePost from './CreatePost'
import styled from 'styled-components'


function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
   fetch('http://localhost:4000/blogs')
   .then(resp => resp.json())
   .then(allBlogs => setBlogs(allBlogs))
  },[])
  
  return (
    <AppContainerStyle>
      <h1 className = "header">Thicccque Boi Blogs 🍫📝</h1>
      <NavBar />
        <Switch>
          <Route path="/about">  
            <About blogs={blogs} />
          </Route>
          <Route path="/createpost">  
            <CreatePost setBlogs={setBlogs}/>
          </Route>
          <Route path="/">
            <Home blogs={blogs} setBlogs={setBlogs}/>
          </Route>
        </Switch>  
    </AppContainerStyle>
  );
}


export default App;

const AppContainerStyle = styled.div`
  background-color: purple;
  font-family: 'Simonetta', cursive;

  .header{
    background-color: gold;
  }
`