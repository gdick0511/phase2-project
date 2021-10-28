import UserCard from './UserCard'

function UserContainer ({blogs}) {
    const renderUserCards = blogs.map((blog) => <UserCard key={blog.id} author = {blog.author} image={blog.image} bio = {blog.bio} /> )
    return(
        <div>
            {renderUserCards}
        </div>
    )
}

export default UserContainer