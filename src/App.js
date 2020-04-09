import React from 'react';
import './App.css';
import Landing from './Landing';
import Gallery from './Gallery';
import About from './About';
import Project from './Project';
import Award from './Award';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Project />
      <Award />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
