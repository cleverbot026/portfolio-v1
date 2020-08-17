import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Greet extends Component {

    render() {

        return(
            <div className={'container'}>
                <div className={'greet-title'}>
                    <h1>Hi! I'm <span>James Labnao</span></h1>
                </div>
                <div className={'greet-body'}>
                <p >Cursus tortor aliquet consequatur facere dignissimos fames iste sociis hac, dictum convallis
                        Cursus tortor aliquet consequatur facere dignissimos fames iste sociis hac, dictum convallis
                        fugiat rutrum sodales commodo habitant, aperiam cumque lectus.
                        fugiat rutrum sodales commodo habitant, aperiam cumque lectus. </p>
                <span>Email me @ <a href={'mailto:jamesv.labnao@gmail.com'}>jamesv.labnao@gmail.com</a></span>
                </div>


            </div>
        )
    }

}

export default Greet