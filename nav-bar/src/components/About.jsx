// About.js
import React from 'react';
import './About.css'; // Create and style the section in this file

const About = () => {
  return (
    <section id="about" style={{ padding: '50px 0' }}>
      <h2>About Me</h2>
      <div className="about-container">
        {/* Left: Profile Picture */}
        <div className="about-photo">
          <img 
            src="https://via.placeholder.com/300" // Replace with your real professional photo URL
            alt="Kitso Senwedi" 
            className="profile-picture"
          />
        </div>

        {/* Right: Professional Summary */}
        <div className="about-summary">
          <h3>Kitso Senwedi - AWS Solution Architect</h3>
          <p>
            I am a passionate and skilled software developer with a background in Information Technology and 
            expertise in cloud architecture. Currently working as an AWS Solution Architect intern, I have experience 
            building scalable cloud solutions, designing secure infrastructure, and optimizing systems using AWS cloud services.
          </p>
          <p>
            My professional journey includes winning a hackathon for creating an AI-powered smart greenhouse 
            and completing a blockchain and cryptography internship. I have hands-on experience with modern 
            frontend frameworks such as React.js and have worked on various full-stack projects, 
            including deploying cloud-based services to assist farmers in automating operations.
          </p>
          <p>
            I am currently pursuing an AWS Solution Architect certification to further solidify my cloud expertise 
            and contribute to cloud-driven projects. My goal is to drive innovation through cloud technology, 
            automation, and user-focused solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
