import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Greet extends Component {

    render() {

        return(
            <div className={'container'}>

                <div className={'greet-title'}>
                    <h1 >Hi! I am James</h1>
                    <h4> Ullam donec auctor aliquid, hendrerit cupiditate, commodi class!</h4>
                </div>
                <div className={'greet-body'}>
                    <p>Ullam donec auctor aliquid, hendrerit cupiditate, commodi class! Molestiae aliqua fermentum adipisicing modi maxime consequuntur perferendis, consequuntur mi condimentum nisl eiusmod. Diam libero rem, distinctio laborum. Dignissim? Nemo veritatis egestas sunt blanditiis? Corrupti conubia excepturi repudiandae? Curae eius mollis tempus, labore ex officia tempora hac, accusantium repellat condimentum? Maecenas est. Penatibus pede! Qui perferendis venenatis qui ducimus anim varius quos, arcu hendrerit volutpat pharetra, incidunt tenetur? Nemo? Nisl sem minus fames perspiciatis, totam id quod mattis dapibus, sapiente consequat dictum quam dui, aspernatur ipsam, dui, orci optio integer omnis vehicula. Illum commodi animi esse turpis saepe. Augue non nihil neque.</p>
                </div>
                {/*<div className={'greet-icon'}>*/}
                {/*    <img src="https://img.icons8.com/cotton/128/000000/cat--v2.png"/>*/}
                {/*</div>*/}
            </div>
        )
    }

}

export default Greet