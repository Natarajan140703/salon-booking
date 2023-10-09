import React from 'react';
import './FooterComponent.css';


const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src="https://www.milduracity.com.au/wp-content/uploads/2017/10/Elegance_Logo.jpg"
            alt="Salon Logo"
            className="logo-image"
          />
          <p className="logo-text">ELEGANCE SALON</p>
        </div>
        <div className="footer-links">
          <ul className="footer-links-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/Faq">FAQ</a>
            </li>
            
          </ul>
        </div>
        <div className="footer-social">
          <ul className="footer-social-list">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 ELEGANCE SALON. All rights reserved.</p>
        <p>
          <a href="/terms">Terms & Conditions</a> | <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;