import BlogCard from './BlogCard'
import styled from 'styled-components'


function BlogContainer ({blogs}) {
    const renderCards = blogs.map((blog) => <BlogCard key={blog.id} title = {blog.title} author = {blog.author} blogpost = {blog.blogpost} /> )
      return(
        <div> 
          {renderCards}
        </div>
      )
};

export default BlogContainer



const blogContainer = styled.div`
  height: 0;
  padding-bottom: 
`