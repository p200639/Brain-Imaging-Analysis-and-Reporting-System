// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';  // Correct the path

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#282c34', color: 'white', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/">
	  <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px', borderRadius: '50%', cursor: 'pointer' }} />
	</Link>

      <h1>Brain Imaging Analysis and Reporting System</h1>
      <div style={{ display: 'flex' }}>
        <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', marginRight: '20px' }}>About</Link>
        <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

