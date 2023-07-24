import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Home from './component/home';
import Header from "./component/header";
import About from "./component/about";
import Gallery from "./component/gallery";
import Footer from "./component/footer";
import TechBlog from "./component/techblog";
import bgImg from './img/bg1.jpg';
import './App.css';


function App() {

  return (
    <Router>
      <div style={{ backgroundImage: `url(${bgImg})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    overflowY: 'scroll' }}>

        <Header/>

        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>

        <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/tech_blog" element={<TechBlog/>}/>
        </Routes>

        <Footer/>

      </div>
    
    </Router>


  );
}

export default App;