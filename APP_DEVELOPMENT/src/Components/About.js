import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const About= () => {
  return (
    
      <div>
        
      <HeaderComponent/>
      <div>

      <div className="contact-container">
      <h2>About Us</h2>
      <p>
      Welcome to ELEGANCE SALON, where beauty meets relaxation and indulgence. We are more than just a salon; we are your sanctuary for self-care and transformation. Our commitment to excellence and passion for beauty has made us a trusted destination for all your grooming and pampering needs.
      </p>
      <p>Whether you're preparing for a special occasion, seeking a regular beauty regimen, or simply indulging in some self-care, ELEGANCE SALON is your go-to destination. Join us on your beauty journey.</p>
      </div>
      </div>
      <FooterComponent/>
    </div>
    
  );
};

export default About;