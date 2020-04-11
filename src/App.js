import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Landing from './Containers/Landing';
import Gallery from './Containers/Gallery';
import About from './Containers/About';
import Project from './Containers/Project';
import Award from './Containers/Award';
import Contact from './Containers/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      {/* <Route exact path="/" component={Landing}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/project" component={Project}/>
      <Route exact path="/gallery" component={Gallery}/>
      <Route exact path="/contact" component={Contact}/> */}

      <Landing />
      <About />
      <Project />
      <Award />
      <Gallery />
      <Contact />

    </div>
    </Router>
    
  );
}

export default App;
