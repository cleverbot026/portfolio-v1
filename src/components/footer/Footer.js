import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGithubAlt, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";


class Footer extends Component {

    render(){

        return(
            <div className={'footer'}>
                <div>
                <a href={'https://www.github.com/cleverbot026'}>
                    {/*<img src="https://img.icons8.com/material-sharp/48/000000/github.png"/>*/}
                    <FontAwesomeIcon icon={faGithubAlt} size={'2x'}></FontAwesomeIcon>
                </a>
                <a href={'https://www.linkedin.com/in/jameslabnao'}>
                    {/*<img src="https://img.icons8.com/material-sharp/48/000000/linkedin.png"/>*/}
                    <FontAwesomeIcon icon={faLinkedinIn} size={'2x'}></FontAwesomeIcon>
                </a>
                <a href={'https://www.instagram.com/jameslovenow'}>
                    {/*<img src="https://img.icons8.com/material-sharp/48/000000/instagram-new.png"/>*/}
                    <FontAwesomeIcon icon={faInstagram} size={'2x'}></FontAwesomeIcon>
                </a>
                <a href={'https://www.twitter.com/jameslovenow'}>
                    {/*<img src="https://img.icons8.com/material-sharp/48/000000/twitter.png"/>*/}
                    <FontAwesomeIcon icon={faTwitter} size={'2x'}></FontAwesomeIcon>
                </a>
                <a href={'https://www.facebook.com/james.labnao'}>
                {/*<img src="https://img.icons8.com/material-sharp/48/000000/facebook.png"/>*/}
                    <FontAwesomeIcon icon={faFacebookF} size={'2x'}></FontAwesomeIcon>
                </a>
                </div>

                <p> Built by James Labnao. Powered by <a>ReactJS</a></p>

            </div>
        )
    }

}

export default Footer