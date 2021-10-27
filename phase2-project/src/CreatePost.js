

function CreatePost () {
    return(
        <div>
            <h2>Create a Post!</h2>
            <form>
                <label>
                 Name:
                    <input type="text" name="name" placeholder="Author name here..."/>
                </label>
                <label>
                 Title
                    <input type="text" name="name" placeholder="Title"/>
                </label>
                <label>
                 Blog: 
                    <textarea type="text" name="name" placeholder="Write your story..."/>
                </label>
                <label>
                 Bio: 
                    <textarea type="text" name="name" placeholder="Your bio here..."/>
                </label>
                <label>
                Image:
                    <input type="text" name="name" placeholder="Upload your photo"/>
                </label>
                <button>Post</button>
            </form>
        </div>
    )
};


export default CreatePost