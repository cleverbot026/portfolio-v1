import React from 'react'
import './MenuStyle.css'

    const Menu = () => {

        return(
            <nav className='menu'>
                <div className={'menu-item brand'}><a>.jameslabnao</a></div>
                <div className='menu-item'><a>me</a></div>
                <div className='menu-item'><a>work</a></div>
                <div className='menu-item'><a>education</a></div>
                <div className='menu-item'><a>projects</a></div>
            </nav>
        )
    };

    export default Menu