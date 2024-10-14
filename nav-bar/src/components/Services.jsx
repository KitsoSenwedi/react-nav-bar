// Services.js
import React from 'react';
import ServiceCard from './ServiceCard'; // Import the ServiceCard component
import './Services.css'; // Create a new CSS file for the services grid
import './Theme.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Professional web development services including full-stack solutions with modern technologies like HTML5, CSS3, and JavaScript.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with real image URLs
    },
    {
      id: 2,
      title: 'React.js Integration',
      description: 'Seamless integration of React.js into new or existing projects, enabling interactive, efficient, and dynamic user interfaces.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with real image URLs
    },
    {
      id: 3,
      title: 'Cloud Services',
      description: 'Cloud infrastructure services including AWS solutions for scalable, secure, and cost-efficient cloud deployment.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with real image URLs
    }
  ];

  return (
    <section id="services" style={{ padding: '50px 0' }}>
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            imageUrl={service.imageUrl}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
