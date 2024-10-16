import React from 'react';
import './Home.css'
import FlowChart from './FlowChart'; // Import FlowChart component

const Home = () => {
  return (
    <section id="home">
      <h2>My Software Development Journey</h2>
      <p>Explore the key milestones of my career as a software developer:</p>
      <FlowChart /> {/* Integrate the flowchart component */}
    </section>
  );
};

export default Home;
