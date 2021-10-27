


function BlogCard ({author , title, blogpost}) {
    return(
        <div>
            <h1>{title}</h1>
            <h3> Author: {author} </h3>
            <h4>Blog: </h4>
            {blogpost}

        </div>
    )
};

export default BlogCard