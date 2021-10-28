import BlogCard from './BlogCard'
// import styled from 'react-components'


function BlogContainer ({blogs}) {
    const renderCards = blogs.map((blog) => <BlogCard key={blog.id} title = {blog.title} author = {blog.author} blogpost = {blog.blogpost} /> )
      return(
        <div> 
          {renderCards}
        </div>
      )
};

export default BlogContainer