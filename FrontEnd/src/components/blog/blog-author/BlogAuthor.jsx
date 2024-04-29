import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const BlogAuthor = ({author}) => {
  const navigate=useNavigate();
  console.log(author)
  return (
    <Row>
      <Col xs={"auto"} className="pe-0">
        <Image className="blog-author" src={author?.avatar} roundedCircle />
      </Col>
      <Col>
        <div>di</div>
        <h6 onClick={()=>navigate('/author/'+author._id)} >{author.nome + author.cognome}</h6>
      </Col>
    </Row>
  );
};

export default BlogAuthor;
