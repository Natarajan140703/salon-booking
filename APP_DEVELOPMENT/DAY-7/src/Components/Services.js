import React from 'react';
import './Services.css'; // Import the CSS file for styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeaderComponent from './HeaderComponent';
import Slider from 'react-slick';


const Services = () => {
  const services = [
    {
      title: 'Haircut',
      description: 'Our experienced stylists will provide you with a stylish haircut that suits your personality and preferences.',
      image: 'https://i.pinimg.com/564x/83/59/34/835934e3263ab0d19ff187cd14923861.jpg' // Replace with actual image
    },
    {
      title: 'Hair Coloring for Women',
      description: 'Transform your look with our professional hair coloring services. Choose from a wide range of colors and styles.',
      image: 'https://i.pinimg.com/564x/93/54/4e/93544ecde1cff18c6674b8f954529d46.jpg' // Replace with actual image
    },
    {
      title: 'Mens grooming',
      description: 'Transform your look with our professional services. Choose from a wide range of syles.',
      image: 'https://i.pinimg.com/564x/0f/28/46/0f284682164aee7d22178dd1458a2ceb.jpg' // Replace with actual image
    },
    {
      title: 'Bridal Makeup',
      description: 'Get a stunning Bridal Makeup for a wedding. Our experts will style you to perfection.',
      image: 'https://i.pinimg.com/564x/60/65/74/606574848f6765756ffdcb69385493ea.jpg' // Replace with actual image
    },
    {
        title: 'Hair Styling',
        description: 'Get a stunning hairstyle for any occasion - be it a party, wedding, or casual day out. Our experts will style your hair to perfection.',
        image: 'https://i.pinimg.com/564x/d4/0d/0b/d40d0bb093deb9569dd5f810348b9a60.jpg' // Replace with actual image
      },
    {
        title: 'Hair Treatment',
        description: 'Revitalize your hair with our rejuvenating hair treatments. Our treatments nourish and strengthen your hair, leaving it healthy and shiny.',
        image: 'https://i.pinimg.com/564x/27/56/b8/2756b80c36f8a30d0c96946e3b96ae9e.jpg' // Replace with actual image
      }
    
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div>

    <HeaderComponent/>
    <div className="services-container">
      <h2>Our Services</h2>
      <Slider {...sliderSettings}>
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Services;