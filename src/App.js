import React from 'react';
import './App.css';
// import { motion } from 'framer-motion';
import Menu from './components/header/Menu';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import Footer from "./components/footer/Footer";
import Greet from './components/pages/Greet'
import AboutMe from "./components/pages/AboutMe";
import profilePic from './assets/pic_square.jpg';
import Work from './components/pages/Work';
import Education from "./components/pages/Education";
import Contact from "./components/pages/Contact"

function App() {
    library.add(faApple, faCheckSquare, faCoffee);

    return (
      <Router>
        <div className="App">
          <Menu/>

          <Greet/>

          <AboutMe image={profilePic}/>
          <Route exact path="\" component={Menu}/>
          <Work/>

          <Education/>

          <Contact/>

          <Footer />

        </div>
      </Router>
  );
}

export default App;
