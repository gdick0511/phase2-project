import BlogContainer from "./BlogContainer"

function Home ({blogs}) {
    return (
        <div>
            <h2>Home</h2>
           <BlogContainer blogs={blogs}/>
        </div>
    )
};

export default Home