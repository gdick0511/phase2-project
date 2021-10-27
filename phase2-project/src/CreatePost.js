import { useState } from "react"

function CreatePost ({setBlogs}) {

    const [newBlogInfo, setNewBlogInfo] = useState({
        name: '',
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

    function handleSubmit(e){
        e.preventDefault()
        // console.log('YEET')
        const newBlog ={
            author: newBlogInfo.author,
            title: newBlogInfo.title,
            blogpost: newBlogInfo.blogpost,
            bio: newBlogInfo.bio,
            image: newBlogInfo.image
        }
        fetch('http://localhost:4000/blogs', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
            },
            body: JSON.stringify(newBlog),
        })
            .then((resp)=> resp.json())
            .then((allBlogs) =>
            setBlogs((currentBlogs) => [allBlogs,...currentBlogs])
            );
    }

    return (
        <div>
            <h2>Create a Post!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                 Name:
                    <input type="text" 
                    name="name" 
                    value={newBlogInfo.author} 
                    onChange={handleAdd} 
                    placeholder="Author name here..."/>
                </label>
                <label>
                 Title
                    <input type="text" 
                    name="title" 
                    value={newBlogInfo.title} 
                    onChange={handleAdd} 
                    placeholder="Title"/>
                </label>
                <label>
                 Blog: 
                    <textarea type="text" 
                    name="blogpost" 
                    value={newBlogInfo.blogpost} 
                    onChange={handleAdd} 
                    placeholder="Write your story..."/>
                </label>
                <label>
                 Bio: 
                    <textarea type="text" 
                    name="bio" 
                    value={newBlogInfo.bio} 
                    onChange={handleAdd} 
                    placeholder="Your bio here..."/>
                </label>
                <label>
                 Image:
                    <input type="text" 
                    name="image" 
                    value={newBlogInfo.image} 
                    onChange={handleAdd} 
                    placeholder="Upload your photo"/>
                </label>
                <button>Post</button>
            </form>
        </div>
    )
};


export default CreatePost;