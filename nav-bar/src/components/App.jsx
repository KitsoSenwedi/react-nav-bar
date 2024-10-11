import React from 'react';
import './index.css'
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Portfolio from './Portfolio';


function App() {
  return (
    <div>  
      <div style={{ padding: '16px', marginTop: '100px' }}>  
      <Home />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      </div>  
    </div>
  );
}

export default App;
