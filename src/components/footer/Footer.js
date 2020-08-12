import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FooterStyle.css'


class Footer extends Component {

    render(){

        return(
            <div className={'footer'}>
                <a href={'https://www.github.com/cleverbot026'}>
                    <img src="https://img.icons8.com/material-sharp/48/000000/github.png"/>
                </a>
                <a href={'https://www.linkedin.com/in/jameslabnao'}>
                    <img src="https://img.icons8.com/material-sharp/48/000000/linkedin.png"/>
                </a>
                <a href={'https://www.instagram.com/jameslovenow'}>
                    <img src="https://img.icons8.com/material-sharp/48/000000/instagram-new.png"/>
                </a>
                <a href={'https://www.twitter.com/jameslovenow'}>
                    <img src="https://img.icons8.com/material-sharp/48/000000/twitter.png"/>
                </a>
                <a href={'https://www.facebook.com/james.labnao'}>
                <img src="https://img.icons8.com/material-sharp/48/000000/facebook.png"/>
                </a>

                <p> Built by James Labnao. Powered by <a>ReactJS</a></p>

            </div>
        )
    }

}

export default Footer