import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutMe extends Component {


    render(){
        return(

            <div className={'container-about'}>
                <div className={'about-title'}>
                    <h2 className={"title"}>background</h2>
                </div>

                <div className={'about-body'}>
                    <p>Reiciendis sapien dui luctus libero, hic repellendus nunc facilisis varius, magni itaque luctus
                        turpis dictumst, mollis dui consequuntur vitae. Aliqua, dictum ullam sit donec bibendum viverra?
                        Animi et morbi dis, doloremque euismod minus do mollitia sit ex lobortis. Veniam exercitation
                        imperdiet soluta aute illo mauris lobortis! Illum eget purus? Maxime occaecat exercitation
                        molestiae incidunt distinctio nesciunt? Leo doloribus soluta repudiandae, pede sollicitudin
                        <br/>
                        <br/>
                        Here are some of the technologies I've been working with recently:
                    </p>
                    <div className={'skills'}>
                    <div>
                        <h4>Languages</h4>
                        <ul>
                            <li>PHP</li>
                            <li>Java</li>
                            <li>C/C++</li>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Tools</h4>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Frameworks</h4>
                        <ul>
                            <li>React</li>
                            <li>Laravel</li>
                            <li>Spring</li>
                            <li>Codeigniter</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Others</h4>
                        <ul>
                            <li>Illustrator</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                    </div>
                </div>
                {/*<img className={'about-icon'} src={this.props.image}/>*/}
            </div>

        )
    }


}

export default AboutMe