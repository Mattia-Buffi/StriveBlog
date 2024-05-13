import React from "react";
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list/BlogList";
import "./styles.css";
import { useContext } from "react";
import { UserSetting } from "../../context/UserSettingProvider";


const Home = props => {
  const {userSetting}=useContext(UserSetting)
  return (
    <Container fluid="sm" className="h-100">
      <h1 className="blog-main-title mb-3 d-block">Benvenuto sullo Strive Blog!</h1>
      {userSetting && <BlogList />}
      
    </Container>
  );
};

export default Home;
