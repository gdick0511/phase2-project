


function BlogCard ({author , title, blogpost}) {
    return(
        <div>
            <h1>{title}</h1>
            <h3> Author: {author} </h3>
            <p>Blog: {blogpost}</p>

        </div>
    )
};

export default BlogCard