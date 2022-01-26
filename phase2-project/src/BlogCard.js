import {useState} from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'

function BlogCard ({author , title, blogpost, id, setBlogs, blogs}) {
  
    const [showBlog, setShowBlog] = useState(false)

    function handleBlogClick(){
        setShowBlog((showBlog) => !showBlog)
    }

    function handleDeleteBlog(){
        fetch(`http://localhost:4000/blogs/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            const tempBlogs = blogs.filter(blog => blog.id !== id)
            setBlogs(tempBlogs)
        })
    }

    return(
        <Card onClick={handleBlogClick}>
            <h1>{title}</h1>
            <h2>By: {author} </h2>
            {showBlog ? <h3>Blog: {parse(blogpost)} 
            {<button onClick={handleDeleteBlog} id="delete">Delete Post</button>} </h3>
            : null }
        </Card>
    )
};

export default BlogCard

const Card = styled.div`
    box-shadow: 4px 4px 8px 10px rgba(0,0,0,0.2);
    margin: 2%;
    padding: 1%;
    width: 700px;
    max-height: 100%;
    border-radius: 8px;
    text-wrap: wrap;
    overflow: auto;
    text-overflow: ellipsis;
    background-color: white;
    h1,h2,h3{
        text-align: center;
        vertical-align: middle;
        text-wrap: wrap;
    }
    #delete {
        border-radius: 10px;
        height: 50px;
        width: 100px;
        margin: 10%;
        font-size: 15px;
        background-color: purple;
        color: gold;
    }
`