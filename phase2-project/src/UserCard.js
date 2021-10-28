import {useState} from 'react'
import styled from 'styled-components'

function UserCard ({author , bio , image}) {

    const [showBio , setShowBio] = useState(false)

    function handleBioClick () {
        setShowBio((current) => !current)
    }
    return(
        <UserDecorations onClick={handleBioClick}>
            <h2>Author: {author}</h2>
            <h2>Profile Pic: </h2>
            <img src = {image} />
            {showBio ? <h3>Bio: {bio}</h3> : null}
        </UserDecorations>
    )
}

export default UserCard

const UserDecorations = styled.div`
    box-shadow: 4px 4px 8px 10px rgba(0,0,0,0.2);
    margin: 2%;
    padding: 1%;
    width: 700px;
    max-height: 100%;
    border-radius: 8px;
    text-wrap: wrap;
    overflow: auto;
    text-overflow: ellipsis;
    h2,h3,img {
        text-align: center;
        vertical-align: middle;
        text-wrap: wrap;
    }

`