import React from 'react';
import './App.css';
// import { motion } from 'framer-motion';
import Menu from './components/header/Menu';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Greet from './components/pages/Greet'
import AboutMe from "./components/pages/AboutMe";
import profilePic from './assets/pic_square.jpg';
import Work from './components/pages/Work';
import Education from "./components/pages/Education";

function App() {
  return (
      <Router>
        <div className="App">
          <Menu/>

          <Greet/>

          <AboutMe image={profilePic}/>
          <Route exact path="\" component={Menu}/>
          <Work/>

          <Education/>

          <Footer />

        </div>
      </Router>
  );
}

export default App;
