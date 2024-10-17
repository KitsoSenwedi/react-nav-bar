// src/components/HackathonCard.js
import React from 'react';
import './HackathonCard.css'; // CSS for styling the hackathon cards

const HackathonCard = ({ title, description, date, position }) => {
  return (
    <div className="hackathon-card">
      <h3>{title}</h3>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Position:</strong> {position}</p>
      <p>{description}</p>
    </div>
  );
};

export default HackathonCard;
