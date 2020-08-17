import React, { Component } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'


import Nav from './components/header/Nav';
import Footer from "./components/footer/Footer";
import Greet from './components/pages/Greet'
import AboutMe from "./components/pages/AboutMe";
import profilePic from './assets/pic_square.jpg';
import Work from './components/pages/Work';
import Education from "./components/pages/Education";
import Contact from "./components/pages/Contact"


class App extends Component {

    constructor(){
        super()
        this.state = {
            active: false
        };
    }




    render() {

        return (
            <motion.div
                className={`main ${this.state.active && 'active'}`}
                animate={{ opacity:  1}}
                initial={{ opacity: 0}}
                transition={{ opacity: {duration: 0.2}}}>
                {/*<header>*/}
                {/*    <Link to={'/'} className={'logo'}>  </Link>*/}
                {/*    <div className={'toggle'} onClick={() => this.setState({active: !this.state.active}) }></div>*/}
                {/*</header>*/}
                {/*<Nav props={this.state.active && 'active'}/>*/}
                {/*<Route exact path="\" component={Nav}/>*/}
                <Greet/>
                <AboutMe image={profilePic}/>
                <Work/>
                {/*<Education/>*/}
                <Contact/>
                <Footer />
            </motion.div>
        );
    }

}

export default App;
