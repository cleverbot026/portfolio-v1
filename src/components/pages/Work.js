import React, { Component } from 'react';

class Work extends Component {


    constructor() {
        super()

        this.state = {
            company: 'Department of Education',
            position: 'Programming Teacher',
            startDate: 'June, 2016',
            endDate: 'August, 2020',
            description: 'Iusto, explicabo exercitation. Porta taciti urna omnis consequatur tempor distinctio? Natoque, qui, nostra aliquet dicta, nulla beatae do! Tenetur aute.',
            isActive: false,
            standby: 'menu-02'
        }
    }

    switchTo1(){

        this.setState({
            company: '88DB',
            position: 'Intern',
            startDate: 'April, 2015',
            endDate: 'May, 2015',
            description: 'Iusto, explicabo exercitation. Porta taciti urna omnis consequatur tempor distinctio? ',
            isActive: true,
            standby: 'menu-01'
        })
    }

    switchTo2(){

        this.setState({
            company: 'Department of Education',
            position: 'Programming Teacher',
            startDate: 'June, 2016',
            endDate: 'August, 2020',
            description: 'Iusto, explicabo exercitation. Porta taciti urna omnis consequatur tempor distinctio?',
            isActive: false,
            standby: 'menu-02'
        })

    }

    render() {
        return(
            <div className={'container'}>

                <h2 className={'work-title'}>work experience</h2>
                <div className={'work-panel'}>

                    <h1 className={'frame'}> {this.state.position} </h1>
                    <h3 className={'frame'}> {this.state.company} </h3>
                    <p className={'frame'}> {this.state.startDate} - {this.state.endDate} </p>
                    <p className={'frame'}> {this.state.description} </p>

                    <span className={'next'} onClick={() => this.state.isActive ? this.switchTo2() : this.switchTo1()}><img src="https://img.icons8.com/small/16/000000/filled-circle.png"/></span>

                </div>


            </div>
        )
    }
}

export default Work