import React from 'react'
import BlogList from '../../components/blog/blog-list/BlogList'

export default function AuthorPosts() {
  return (
    <div>
     <BlogList singleAuthor={true}/>   
    </div>
  )
}
