import React from "react";
import { Col, Row } from "react-bootstrap";
// import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import { useState } from "react";
//fare la fetch al datbase per recuperare i post


const BlogList = props => {
  const [posts,setPosts]=useState([])
  const [loader,setLoader]=useState(false)
  async function downloadPosts(){
    //loader
    try {
      let response= await fetch('http://localhost:3001/blogPosts');
      if(response.ok){
        setPosts(await response.json());
        console.log(posts);
      }else{
        const error = new Error(`HTTP Error! Status: ${response.status}`)
        error.response=response;
        throw error;
      }
    } catch (err) {
      console.error(err)
    }
  }
  downloadPosts();
  return (
    <Row>
      {posts.map((post, i) => (
        <Col
          key={`item-${i}`}
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
