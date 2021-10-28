import BlogContainer from "./BlogContainer"
import styled from 'styled-components'

function Home ({blogs}) {
    return (
       <div>Home
        <HomeContainer>
            <header>Home</header>
           <BlogContainer blogs={blogs}/>
        </HomeContainer>
        </div> 
    )
};

export default Home


const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    header{ 
        display: flex;
        justify-content: center;
    }
   
`
