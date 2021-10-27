import {useState} from 'react'


function UserCard ({author , bio , image}) {

    const [showBio , setShowBio] = useState(false)

    function handleBioClick () {
        setShowBio((current) => !current)
    }
    return(
        <div onClick={handleBioClick}>
            <h2>Author: {author}</h2>
            <h2>Profile Pic: </h2>
            <img src = {image} />
            {showBio ? <h3>Bio: {bio}</h3> : null}
            
        </div>
    )
}

export default UserCard