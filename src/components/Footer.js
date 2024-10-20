import React from 'react';
import { Link } from 'react-router-dom';
import twitterIcon from '../assets/twitter.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.jpeg'; // Assuming it's a PNG
import whatsappIcon from '../assets/whatsapp.jpeg'; // Assuming it's a PNG

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#282c34', color: 'white', padding: '10px 0' }}>
      <p>Brain Imaging Analysis and Reporting System</p>
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" style={{ width: '32px', height: '32px', borderRadius: '50%', margin: '0 10px' }} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" style={{ width: '32px', height: '32px', borderRadius: '50%', margin: '0 10px' }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" style={{ width: '32px', height: '32px', borderRadius: '50%', margin: '0 10px' }} />
        </a>
        {/* Assuming you don't want a WhatsApp link */}
        { <a href="https://wa.me/+923106051149" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="Whatsapp" style={{ width: '32px', height: '32px', borderRadius: '50%', margin: '0 10px' }} />
        </a>}
      </div>

      <nav style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </footer>
  );
};

export default Footer;
