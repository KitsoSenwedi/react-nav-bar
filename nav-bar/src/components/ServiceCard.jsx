// ServiceCard.js
import React from 'react';
import './ServiceCard.css'; // Add CSS for service card styling


const ServiceCard = ({ imageUrl, title, description }) => {
  return (
    <div className="service-card">
      <img src={imageUrl} alt={title} className="service-image" />
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
