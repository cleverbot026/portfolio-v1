import React from 'react'
import './MenuStyle.css'
import {
    Link
} from 'react-router-dom';

    const Menu = () => {

        return(
            <nav className='menu'>
                <div className={'menu-item brand'}>
                    <Link to="/">.jameslabnao</Link>
                </div>
                <div className='menu-item'><a>me</a></div>
                <div className='menu-item'><a>work</a></div>
                <div className='menu-item'><a>education</a></div>
                <div className='menu-item'><a>projects</a></div>
            </nav>


        )
    };

    export default Menu