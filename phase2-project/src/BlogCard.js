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
            <h3> Author: {author} </h3>
            {showBlog ? <h4>Blog {parse(blogpost)} </h4>
            : null }
        </Card>
    )
};

export default BlogCard


// const Card = styled.div`
//     display: inline;
//     backgroud-repeat: no-repeat;
//     background-position: center 90%;
//     float: left;
//     margin: 2%;
//     padding: 1%;
//     outline: #3B0B0B dotted thick;
//     transition: 0.75s;
//     opacity: 1;
//     h1,h3,h4{
//         text-align: center;
//         vertical-align: middle;
//         text-wrap: wrap;
//     }


// `



const Card = styled.div`
    box-shadow: 4px 4px 8px 10px rgba(0,0,0,0.2);
    margin: 2%;
    padding: 1%;
    
    width: 500px;
    max-height: 100%;
    border-radius: 8px;
    text-wrap: wrap; 
    h1,h3,h4{
        text-align: center;
        vertical-align: middle;
        text-wrap: wrap;
        
    }


`