import React, { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";
import { useState } from "react";
import { API_URL } from "../../../globaldata/globaldata";
import { useParams } from "react-router-dom";
import SkeletonCard from "../../../views/skeletonComponent/SkeletonCard";
import { UserSetting } from "../../../context/UserSettingProvider";


const BlogList = ({singleAuthor = false}) => {
  //se prop true modifico l'endpoint per ottenere la lista dei posts ma di un singolo autore altrimenti 
  // punto all'endpoint generale
  const {userSetting}=useContext(UserSetting)
  let tokenAuth='Bearer '+userSetting.token;
  const params=useParams()
  const [posts,setPosts]=useState([])
  const [loader,setLoader]=useState(true)
  async function downloadPosts(){
   
    //loader skeleton
    try {
      console.log(API_URL+(singleAuthor?('/authors/'+params.id+'/blogPosts'):'/blogPosts/home'))
      let response= await fetch(API_URL+(singleAuthor?('/authors/'+params.id+'/blogPosts'):'/blogPosts/home'),
                          {headers:{"Authorization":tokenAuth}});
      if(response.ok){
        let result= await response.json()
        console.log(result)
        setPosts(result);
        setLoader(false)
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
      {loader && <Col><SkeletonCard/></Col>}
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
