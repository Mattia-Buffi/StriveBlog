import React from "react";
import NavBar from "./components/navbar/BlogNavbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Blog from "./views/blog/Blog";
import NewBlogPost from "./views/new/New";
import Authors from "./views/author/Authors";
import DashboardUser from "./views/dashboardUser/DashboardUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserSettingProvider from "./context/UserSettingProvider";
import AuthorPosts from "./views/author/AuthorPosts";
import MessageProvider from "./context/MessageProvider"


function App() {
  //verificare il login dell'utente nel local storage
  //creare context
  // const{messageUser}=useContext(MessageUser)
  return (
    <UserSettingProvider>
    <MessageProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/authors" element={<Authors/>} />
        <Route path="/author/:id/posts" element={<AuthorPosts/>} />
        <Route path="/dashboardUser" element={<DashboardUser isNew={true}/>}/>
        <Route path="/dashboardUser/:id" element={<DashboardUser isNew={false}/>}/>
        <Route path="/new" element={<NewBlogPost />} />
      </Routes>
      {/* <MessageToUser messageUser={messageUser} /> */}
      <Footer />
    </Router>
    </MessageProvider>
    </UserSettingProvider>
  );
}

export default App;
