import {useState} from 'react'
import styled from 'styled-components'

function BlogCard ({author , title, blogpost}) {

    const [showBlog, setShowBlog] = useState(false)

    function handleBlogClick(){
        setShowBlog((showBlog) => !showBlog)
    }

    return(
        
        <Card onClick={handleBlogClick}>
            <h1>{title}</h1>
            <h3> Author: {author} </h3>
            {showBlog ? <h4>Blog <p>{blogpost}</p> </h4>
            : null }
        </Card>
    )
};

export default BlogCard


const Card = styled.div`
    box-shadow: 4px 4px 8px 10px rgba(0,0,0,0.2);
    margin: 30px;
    border: 40px;
    width: 500px;
    height: 160px;
    border-radius: 8px;
    h1,h3,h4{
        text-align: center;
    }


`