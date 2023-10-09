import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const Contact = () => {
  return (
    
      <div>
        
      <HeaderComponent/>
      <div>

      <div className="contact-container">
      <h2>Contact Information</h2>
      <p>
        <strong>Address:</strong> 123 Salon Street, Cityvilly , Coimbstore,
        <p>TamilNadu, 12345</p> 
      </p>
      <p>
        <strong>Phone:</strong> 8667470164
      </p>
      <p>
        <strong>Email:</strong> elegance@gmail.com
      </p>
      <p>
        <strong>Open Timing</strong> Daily[9Am-9Pm]
      </p>
      <p>
         Follw us on socialmedia for futher Offers and updates on daily basis
      </p>
      </div>
      </div>
      <FooterComponent/>
    </div>
    
  );
};

export default Contact;