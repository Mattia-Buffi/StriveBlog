import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const BlogAuthor = props => {
  const { nome, cognome, avatar, _id} = props;
  const navigate=useNavigate();
  console.log(props)
  return (
    <Row>
      <Col xs={"auto"} className="pe-0">
        <Image className="blog-author" src={avatar} roundedCircle />
      </Col>
      <Col>
        <div>di</div>
        <h6 onClick={()=>navigate('/author/'+_id)} >{nome + cognome}</h6>
      </Col>
    </Row>
  );
};

export default BlogAuthor;
