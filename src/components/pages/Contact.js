import React, { Component } from 'react';

class Contact extends Component {


    render() {
        return(
            <div className={"container-contact"}>

                <p>I am currently looking for a developer position. If you happen to know someone who is hiring kindly </p>

                <a className={'email'} href={"mailto:jamesv.labnao@gmail.com"}> Email Me! </a>
            </div>
        )
    }
}

export  default Contact