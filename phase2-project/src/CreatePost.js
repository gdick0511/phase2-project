import { useState } from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import styled from 'styled-components'

function CreatePost ({setBlogs}) {

    const [newBlogInfo, setNewBlogInfo] = useState({
        author: '',
        title: '',
        blogpost: '',
        bio: '',
        image: ''
    })

    function handleAdd(e){
        setNewBlogInfo((currentNewBlogPost) => ({
            ...currentNewBlogPost,
            [e.target.name]: e.target.value
        }))
    }

    function handleBlogChange(e){
        setNewBlogInfo((currentNewBlogPost) => ({
            ...currentNewBlogPost,
            blogpost: e
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        const newBlog ={
            author: newBlogInfo.author,
            title: newBlogInfo.title,
            blogpost: newBlogInfo.blogpost,
            bio: newBlogInfo.bio,
            image: newBlogInfo.image
        }

        fetch('https://phase2-project-backend.herokuapp.com/blogs', {

            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
            },
            body: JSON.stringify(newBlog),
        })
            .then((resp)=> resp.json())
            .then((allBlogs) => {
            setBlogs((currentBlogs) => [allBlogs,...currentBlogs])
            setNewBlogInfo({
            author: '',
            title: '',
            blogpost: '',
            bio: '',
            image: ''
    })
            });
    }

    return (
        <CreatePostBox>
            <h2>Create a Post!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                 <h4 id="authorFirst">Author:</h4>
                    <input type="text" 
                    name="author" 
                    value={newBlogInfo.author} 
                    onChange={handleAdd} 
                    placeholder="Author name here..."/>
                </label>
                <label>
                 <h4 id="title">Title:</h4>
                    <input type="text" 
                    name="title" 
                    value={newBlogInfo.title} 
                    onChange={handleAdd} 
                    placeholder="Title"/>
                </label>
                 <div>
                     <ReactQuill
                        theme='snow'
                        name="blogpost" 
                        placeholder="Write your story..."
                        value={newBlogInfo.blogpost}
                        onChange={handleBlogChange}
                        style={{minHeight: '300px'}}
                     />
                 </div>
                <label>
                <h4 id="author">Author Bio</h4>
                    <input id="input" type="text" 
                    name="bio" 
                    value={newBlogInfo.bio} 
                    onChange={handleAdd} 
                    placeholder="Your bio here..."/>
                </label>
                <label>
                 <h4 id="pic">Profile Pic:</h4>
                    <input id="image" type="text" 
                    name="image" 
                    value={newBlogInfo.image} 
                    onChange={handleAdd} 
                    placeholder="Upload your photo"/>
                </label>
                <button id="post">Post</button>
            </form>
        </CreatePostBox>
    )
};

export default CreatePost;

const CreatePostBox = styled.div`
    box-shadow: 4px 4px 8px 10px rgba(0,0,0,0.2);
    margin: auto;
    border: auto;
    width: 700px;
    border-radius: 8px;
    background-color: white;
    min-height: 80vh;
    #input {
        height: 100px;
        width: 450px;
        display: flex;
        margin: auto;
    }
    #image {
        height: 30px;
        width: 450px;
        display: flex;
        margin: auto;
    }
    #post {
        border-radius: 10px;
        height: 50px;
        width: 200px;
        margin: 35%;
        font-size: 25px;
        background-color: purple;
        color: gold;
    }
    h2 {
        text-align: center;
    }
    #author,#pic  {
        text-align: center;
        display: flex;
        justify-content: space-around;
    }
    #authorTitle,#title: {
        text-align: center;
        display: flex;
        justify-content: space-around;
        background-color: red;
    }
    `
    