// ProjectCard.js
import React from 'react';
import './ProjectCard.css'; // Separate CSS for card-specific styling
import './Theme.css'

const ProjectCard = ({ imageUrl, title, description }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
