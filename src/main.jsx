import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; 
import Navi from "./components/Navi";
import Footer from "./components/Footer";
import './components/styles.css'; 
import './components/util.css';
import './tailwind.css';     

import Index from "./pages/index";
import Blog from "./pages/blog";
import Photos from "./pages/photos";
import Projects from "./pages/projects";

createRoot(document.getElementById('root')).render(
      
        <Router>
        <Header />
        <Navi />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
        </Router>
      
)
