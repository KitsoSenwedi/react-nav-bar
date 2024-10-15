// Home.js
import React from 'react';
import './Home.css'; // Custom styles for timeline


const Home = () => {
  return (
    <section id="home" style={{ padding: '50px 0' }}>
      <h2>My Journey as a Software Developer</h2>
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2018: Bachelor's Degree in IT (Software Development)</h3>
            <p>Graduated with a major in software development and started building foundational skills in full-stack development.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2022: Blockchain and Cryptography Internship</h3>
            <p>Completed a 1-month internship focused on blockchain technology and cryptography, gaining hands-on experience with decentralized systems.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2023: Freelance Web Development</h3>
            <p>Developed and hosted a static website for a client, showcasing frontend development skills using HTML, CSS, and JavaScript.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2023: AWS Solution Architect Intern</h3>
            <p>Began working as an AWS Solution Architect intern, focusing on cloud infrastructure design, deployment, and scalability.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2024: Hackathon Winner</h3>
            <p>Won a hackathon for designing a fully automated AI-powered smart greenhouse using AWS cloud services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
