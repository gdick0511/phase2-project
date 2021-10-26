import UserContainer from './UserContainer'

function About ({blogs}) {
    
    return(
        <div>
            <h2>About</h2>
            <UserContainer blogs={blogs} />
        </div>
    )
};

export default About