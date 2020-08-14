import React from 'react'
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
                <div className='menu-item'><a>contact</a></div>
                <div className='menu-item'><a>resume</a></div>

            </nav>


        )
    };

    export default Menu