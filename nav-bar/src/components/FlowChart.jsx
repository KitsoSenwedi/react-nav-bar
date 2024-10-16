// src/components/FlowChart.js
import React from 'react';
import './FlowChart.css'; // Import the CSS for animations

const FlowChart = () => {
  return (
    <div className="flowchart-container">
      <div className="flowchart-step">
        <div className="flowchart-circle">1</div>
        <p>Bachelor's Degree in IT</p>
      </div>

      <div className="flowchart-line"></div>

      <div className="flowchart-step">
        <div className="flowchart-circle">2</div>
        <p>Freelance Web Developer</p>
      </div>

      <div className="flowchart-line"></div>

      <div className="flowchart-step">
        <div className="flowchart-circle">3</div>
        <p>Cryptography & Blockchain Internship</p>
      </div>

      <div className="flowchart-line"></div>

      <div className="flowchart-step">
        <div className="flowchart-circle">4</div>
        <p>AWS Solution Architect Intern</p>
      </div>
    </div>
  );
};

export default FlowChart;
