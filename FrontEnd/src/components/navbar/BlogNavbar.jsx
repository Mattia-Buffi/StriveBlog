import React, { useContext, useState } from "react";
import { Button, Container, Navbar , Nav} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles.css";
import { UserSetting } from "../../context/UserSettingProvider";
import LoginModal from "../loginmodal/LoginModal";
import MessageToUser from "../MessageToUser";
import { MessageUser } from "../../context/MessageProvider";

const NavBar = props => {
  const [show,setShow]=useState(false)
  const navigate=useNavigate()
  const handleShow=()=>setShow(true)

  // se contesto generale settato come true abilito il 
  const {userSetting}=useContext(UserSetting)
  const {messageUser}=useContext(MessageUser)
  return (
  <> 
    <Navbar expand="lg" className="blog-navbar" fixed="top">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img className="blog-navbar-brand" alt="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Item onClick={()=>navigate('/')}>Home</Nav.Item>
            {userSetting!==null && (<>
                <Nav.Item onClick={()=>navigate('/blogPosts')}>Blog</Nav.Item>
                <Nav.Item onClick={()=>navigate('/authors')}>Authors</Nav.Item>
                <Nav.Item onClick={()=>navigate('/author/'+userSetting.author._id+'/posts')}>My Posts</Nav.Item>
                </>)}
        </Nav>
        </Navbar.Collapse>
        {!userSetting && (
        <>
          <Button variant="outline-dark" onClick={handleShow}>
            Log In
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right ms-1" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
            </svg>
          </Button>
          <Button as={Link} to="/dashboardUser" className="bg-dark mx-2 border-dark">Sign UP</Button>
        </>)}
        {userSetting &&(
          <>
            <Button variant="outline-dark" className="border-0" as={Link} to="/new">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
              </svg>
              <span className="ms-1">New Post</span>
            </Button>
            {/* da modificare la rotta per la lista dei soli post dell'autore */}
            <Button variant="outline-dark" className="border-0" as={Link} to="/new">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
              </svg>
              <span className="ms-1">Trend</span>
            </Button>
            <Button variant="outline-dark" className="border-0 p-1">
              <img width={24} height={24} src={userSetting.author?.avatar??''} className="bg-gray rounded-circle border-dark border-2" />
            </Button>
          </>
        )
        }
      </Container>
    </Navbar>
    <LoginModal show={show} setShow={setShow}/>
    <MessageToUser messageUser={messageUser} />
  </>
  );
};

export default NavBar;
