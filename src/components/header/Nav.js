import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

    class Nav extends Component {

        render() {
            return(
                <nav className={`navigation ${this.props.props}`}>
                    <ul>
                        <li><Link to={'/'}>about me</Link></li>
                        <li><Link to={'/'}>work</Link></li>
                        <li><Link to={'/'}>education</Link></li>
                        <li><Link to={'/'}>contact me</Link></li>
                        <li><Link to={'/'}>resume</Link></li>
                    </ul>
                </nav>
            )
        }
    }

    export default Nav