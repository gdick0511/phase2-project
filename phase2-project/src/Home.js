import BlogContainer from "./BlogContainer"
import styled from 'styled-components'

function Home ({blogs}) {
    return (
        <HomeContainer>
            <header>Home</header>
           <BlogContainer blogs={blogs}/>
        </HomeContainer>
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
