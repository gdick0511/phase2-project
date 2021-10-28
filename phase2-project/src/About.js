import UserContainer from './UserContainer'
import styled from 'styled-components'
function About ({blogs}) {
    
    return(
        <UserContainerStyle>
            {/* <h2></h2> */}
            <UserContainer blogs={blogs} />
        </UserContainerStyle>
    )
};

export default About

const UserContainerStyle = styled.div`
     background-color: purple;
     padding: 15px;
`