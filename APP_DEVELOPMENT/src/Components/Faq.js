import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const Faq= () => {
  return (
    
      <div>
        
      <HeaderComponent/>
      <div>

      <div className="contact-container">
      <h2>FAQ</h2>
      <p>
      What are your salon's hours of operation?</p>
<p>Our salon is open [Days of the Week] from [Opening Time] to [Closing Time]. We also have extended hours on [Specify Days] to accommodate your schedule. </p>
      <p>What is your cancellation policy?

<p>We kindly ask for at least [Specify Hours/Days] notice for any appointment cancellations.Late cancellations or no-shows may be subject to a cancellation fee.</p>
</p></div>
      </div>
      <FooterComponent/>
    </div>
    
  );
};

export default Faq;