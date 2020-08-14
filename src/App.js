import React, { Component } from 'react';
import './App.css';
// import { motion } from 'framer-motion';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'


import Nav from './components/header/Nav';
import Footer from "./components/footer/Footer";
import Greet from './components/pages/Greet'
import AboutMe from "./components/pages/AboutMe";
import profilePic from './assets/pic_square.jpg';
import Work from './components/pages/Work';
import Education from "./components/pages/Education";
import Contact from "./components/pages/Contact"

library.add(faApple, faCheckSquare, faCoffee);

class App extends Component {

    constructor(){
        super()
        this.state = {
            active: false
        }
    }

    render() {
        return (
            <Router>
                <div className={`main ${this.state.active && 'active'}`}>
                    <header>
                        <Link to={'/'} className={'logo'}> jameslabnao </Link>
                        <div className={'toggle'} onClick={() => this.setState({active: !this.state.active}) }></div>
                    </header>
                    <Nav props={this.state.active && 'active'}/>
                    {/*<Greet/>*/}
                    {/*<AboutMe image={profilePic}/>*/}
                    {/*<Route exact path="\" component={Nav}/>*/}
                    {/*<Work/>*/}
                    {/*<Education/>*/}
                    {/*<Contact/>*/}
                    {/*<Footer />*/}
                </div>
            </Router>
        );
    }

}

export default App;
