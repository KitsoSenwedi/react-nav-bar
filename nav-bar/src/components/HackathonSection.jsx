// src/components/HackathonSection.js
import React from 'react';
import HackathonCard from './HackathonCard';

const HackathonSection = () => {
  const hackathons = [
    {
      title: 'TelkomLearn Hackathon',
      description: 'Developed a gamified learning platform to help students stay engaged with their online courses.',
      date: 'September 2024',
      position: 'Winner',
    },
    {
      title: 'FNB App of the Year Hackathon',
      description: 'Created a financial solution focused on digital payments and access to underserved communities.',
      date: 'October 2024',
      position: 'Participant',
    },
    {
      title: 'Smart Greenhouse Hackathon',
      description: 'Built a fully automated smart greenhouse using AWS cloud services for data collection and AI-powered irrigation.',
      date: 'July 2024',
      position: 'First Prize',
    },
  ];

  return (
    <section id="hackathons">
      <h2>Hackathon Experiences</h2>
      <div className="hackathon-list">
        {hackathons.map((hackathon, index) => (
          <HackathonCard
            key={index}
            title={hackathon.title}
            description={hackathon.description}
            date={hackathon.date}
            position={hackathon.position}
          />
        ))}
      </div>
    </section>
  );
};

export default HackathonSection;
