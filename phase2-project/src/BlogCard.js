import {useState} from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'


function BlogCard ({author , title, blogpost}) {

    const [showBlog, setShowBlog] = useState(false)

    function handleBlogClick(){
        setShowBlog((showBlog) => !showBlog)
    }

    return(
        
        <Card onClick={handleBlogClick}>
            <h1>{title}</h1>
            <h2>By: {author} </h2>
            {showBlog ? <h3>Blog: {parse(blogpost)} </h3>
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
    border-radius: 
    text-wrap: wrap;
    overflow: auto;
    text-overflow: ellipsis;
    background-color: white;
    h1,h2,h3{
        text-align: center;
        vertical-align: middle;
        text-wrap: wrap;
    }
`