import React, { Component } from 'react';
import './PagesStyle.css';
import { Link } from 'react-router-dom';

class AboutMe extends Component {


    render(){
        return(

            <div className={'container'}>
                <div className={'about-title'}>
                    <h2 className={"title"}>background</h2>
                </div>

                <div className={'about-body'}>
                    <p>Reiciendis sapien dui luctus libero, hic repellendus nunc facilisis varius, magni itaque luctus
                        turpis dictumst, mollis dui consequuntur vitae. Aliqua, dictum ullam sit donec bibendum viverra?
                        Animi et morbi dis, doloremque euismod minus do mollitia sit ex lobortis. Veniam exercitation
                        imperdiet soluta aute illo mauris lobortis! Illum eget purus? Maxime occaecat exercitation
                        molestiae incidunt distinctio nesciunt? Leo doloribus soluta repudiandae, pede sollicitudin
                    </p>
                </div>
                <div className={'about-icon'}>
                    <img src={this.props.image}/>
                </div>
            </div>

        )
    }


}

export default AboutMe