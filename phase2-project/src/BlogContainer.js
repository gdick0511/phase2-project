import BlogCard from './BlogCard'

function BlogContainer ({blogs, handleDeleteBlog, setBlogs}) {
    const renderCards = blogs.map((blog) => <BlogCard key={blog.id} 
    title = {blog.title} 
    author = {blog.author} 
    blogpost = {blog.blogpost} 
    id={blog.id} 
    handleDeleteBlog={handleDeleteBlog} 
    blogs={blogs}
    setBlogs={setBlogs}
    /> )

      return(
        <div> 
          {renderCards}
        </div>
      )
};

export default BlogContainer
