import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
const BlogItem = ({post}) => {
  console.log(post)
  return (
    <Link to={`/blog/${post._id}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img variant="top" src={post.cover} className="blog-cover" />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <BlogAuthor author={post.author} />
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default BlogItem;
