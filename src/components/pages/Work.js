import React, { Component } from 'react';

function Work() {
        const workInfo = [
            {
                id: 1,
                company: 'Department of Education',
                position: 'Programming Teacher',
                startDate: 'June, 2016',
                endDate: 'August, 2020',
                description: 'Iusto, explicabo exercitation. Porta taciti urna omnis consequatur tempor distinctio? Natoque, qui, nostra aliquet dicta, nulla beatae do! Tenetur aute.',
                isActive: false,
                standby: 'menu-02'
            },{
                id: 2,
                company: '88DB',
                position: 'Intern',
                startDate: 'April, 2015',
                endDate: 'May, 2015',
                description: 'Iusto, explicabo exercitation. Porta taciti urna omnis consequatur tempor distinctio? ',
                isActive: true,
                standby: 'menu-01'
            }]

            const workList = workInfo.map(info =>
                <div className={'works'} key={info.id}>
                    <h1 className={''}> {info.position} </h1>
                    <h3 className={''}> {info.company} </h3>
                    <p className={''}> {info.startDate} - {info.endDate} </p>
                    <p className={''}> {info.description} </p>
                </div>)

        return(
            <div className={'container'}>
                <h2 className={'work-title'}>work experience</h2>
                    <div >
                    {workList}
                    </div>
            </div>
        )

}

export default Work