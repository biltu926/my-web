import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Link } from "react-router-dom";
import Home from './component/home';
import Header from "./component/header";
import About from "./component/about";
import Gallery from "./component/gallery";
import Footer from "./component/footer";
import TechBlog from "./component/techblog";
import Projects from "./component/projects";
import './App.css';


function App() {

  return (
    <Router>
      <div style={{ width: "100%", background: "linear-gradient(90deg, #effaff 0%, #d9e7ff 100%)" }}>

        <Header/>

        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>

        <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/tech_blog" element={<TechBlog/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>

        <Footer/>

      </div>
    
    </Router>


  );
}

export default App;