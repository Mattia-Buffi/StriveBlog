import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BlogAuthor from "../../components/blog/blog-author/BlogAuthor";
import BlogLike from "../../components/likes/BlogLike";
// import posts from "../../data/posts.json";
import "./styles.css";
import { API_URL } from "../../globaldata/globaldata";
import Commenti from "../../components/commenti/Commenti";
const Blog = props => {
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

const downLoadpost = async ()=>{
  console.log(API_URL+'/blogPosts/'+id)
  try {
    const response = await fetch(API_URL+'/blogPosts/'+id)
    let result= await response.json();
    setBlog(result)
    if(response.ok){
        //messaggio di evvenuto inserimento
        console.log('risposta ok')
        setLoading(false)
    }else{
        const error = new Error(`HTTP Error! Status: ${response.status}`)
        error.response=response;
        throw error;
    } 
  }catch (error) {
          console.error(error)
  }
}

  useEffect(() => {
    downLoadpost(id);
    // if (blog) {
    //   console.log(blog);
    // } else {
    //   navigate("/404");
    // }
  }, []);

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div className="blog-details-root">
        <Container>
          <Image className="blog-details-cover" src={blog.cover} fluid />
          <h1 className="blog-details-title">{blog.title}</h1>

          <div className="blog-details-container">
            <div className="blog-details-author">
              <BlogAuthor author={blog.author}/>
            </div>
            <div className="blog-details-info">
              <div>{blog.createdAt}</div>
              <div>{`lettura da ${blog.readTime.value} ${blog.readTime.unit}`}</div>
              <div
                style={{
                  marginTop: 20,
                }}
              >
                <BlogLike defaultLikes={blog.likes} onChange={console.log} />
              </div>
            </div>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          ></div>
          <Commenti />
          {/* mappare tutti i commenti con commnet area e single comment */}
        </Container>
      </div>
    );
  }
};

export default Blog;
