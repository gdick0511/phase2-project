


function UserCard ({author , bio , image}) {
    return(
        <div>
            <h2>Author: {author}</h2>
            <img src = {image} />
            <h3>Bio: {bio}</h3>
            
        </div>
    )
}

export default UserCard