import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";
import { useState } from "react";
import { API_URL } from "../../../globaldata/globaldata";
import { useParams } from "react-router-dom";
//fare la fetch al datbase per recuperare i post


const BlogList = ({singleAuthor = false}) => {
  //se prop true modifico l'endpoint per ottenere la lista dei posts ma di un singolo autore altrimenti 
  // punto all'endpoint generale

  const params=useParams()
  const [posts,setPosts]=useState([])
  const [loader,setLoader]=useState(false)
  async function downloadPosts(){
   
    //loader skeleton
    try {
      let response= await fetch(API_URL+(singleAuthor?('/authors/'+params.id):'')+'blogPosts/home');
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
  useEffect(()=>{
    downloadPosts();
  },[])
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
          <BlogItem key={post.title} post={post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
