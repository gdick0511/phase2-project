import {useState} from 'react'

function BlogCard ({author , title, blogpost}) {

    const [showBlog, setShowBlog] = useState(false)

    function handleBlogClick(){
        setShowBlog((showBlog) => !showBlog)
    }

    return(
        <div onClick={handleBlogClick}>
            <h1>{title}</h1>
            <h3> Author: {author} </h3>
            {showBlog ? <h4>Blog <p>{blogpost}</p> </h4>
            : null }
        </div>
    )
};

export default BlogCard