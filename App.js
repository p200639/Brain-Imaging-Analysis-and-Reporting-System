import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';  // Ensure you're importing the CSS file

const App = () => {
  return (
    <Router>
      <div className="app-container">  {/* Wrap all content in a flex container */}
        <Navbar />
        <div className="content-wrap">  {/* This div will hold the page content */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* You can add more routes here */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

