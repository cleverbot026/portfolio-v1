import React, { Component } from 'react'

function Education() {

    const schoolInfo = [
        {
            id: 1,
            name: 'Polytechnic University of the Philippines',
            level: 'BS Computer Science',
            startDate: '2012',
            endDate: '2016'
        },
        {
            id: 2,
            name: 'Concepcion Integrated School - Secondary Level',
            level: 'Secondary Education',
            startDate: '2008',
            endDate: '2012'
        },
        {
            id: 3,
            name: 'Concepcion Integrated School - Elementary Level',
            level: 'Primary Education',
            startDate: '2003',
            endDate: '2008'
        }
    ]

    const schoolList = schoolInfo.map( info => <div key={info.id} >

        <h2>{info.name}</h2>
        <p>{info.level}</p>
        <p>{info.startDate} - {info.endDate}</p>

    </div>)

    return(
        <div className={"container"}>

            <div>{schoolList}</div>

        </div>
    )

}

export default Education