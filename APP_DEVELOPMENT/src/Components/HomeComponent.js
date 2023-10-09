import React from 'react';
import HeaderComponent from './HeaderComponent';
import VideoBackground from './VideoBackground';
import './HomeComponent.css';
import FooterComponent from './FooterComponent';

const HomeComponent = () => {
  return (
    <div>
    <div className="home-container">
      <HeaderComponent />
      <VideoBackground />
      <div className="content">
        <h1>You’ll love what you see.</h1>
        <p>Beauty in Quality.</p>
      </div>
    </div>

      <FooterComponent/>
    </div>
  );
};

export default HomeComponent;