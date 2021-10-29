import BlogContainer from "./BlogContainer"
import styled from 'styled-components'

function Home ({blogs, handleDeleteBlog, setBlogs}) {
    return (
       
        <HomeContainer>
           <BlogContainer blogs={blogs} handleDeleteBlog={handleDeleteBlog} setBlogs={setBlogs}/>
        </HomeContainer>
      
    )
};

export default Home

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    // background-color: purple;
    // min-height: 100vh;
    header{ 
        display: flex;
        justify-content: center;
    }
   
`
