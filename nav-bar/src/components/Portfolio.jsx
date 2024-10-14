// Portfolio.js
import React from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
import './Portfolio.css'; // Import CSS for the portfolio grid
import './Theme.css'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-powered Smart Greenhouse',
      description: 'An automated greenhouse system using AI and IoT to manage irrigation and pest control, with real-time monitoring via AWS services.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with real image URLs
    },
    {
      id: 2,
      title: 'Gamified Learning Platform',
      description: 'A platform that turns online learning into a game with challenges, badges, and leaderboards to keep users engaged.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with real image URLs
    },
    {
      id: 3,
      title: 'Blockchain Cryptography Project',
      description: 'A project focusing on secure communication using blockchain and cryptographic algorithms to ensure data integrity.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with real image URLs
    }
  ];

  return (
    <section id="portfolio" style={{ padding: '50px 0' }}>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
