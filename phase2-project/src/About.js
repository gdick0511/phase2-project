import UserContainer from './UserContainer'
import styled from 'styled-components'
function About ({blogs}) {
    
    return(
        <UserContainerStyle>
            <UserContainer blogs={blogs} />
        </UserContainerStyle>
    )
};

export default About

const UserContainerStyle = styled.div`
     background-color: purple;
     padding: 15px;
`