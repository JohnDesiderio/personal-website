import React from 'react';
import Experience from '../experience';
import { IExperience } from '../types';

const company = 'NCR Corporation';
const position = 'Software Engineer Intern';
const time_served = 'May 2021 – August 2021';
const details = [
    'Worked in a team with four colleagues to implement a progressive web application using the Agile methodology',
    'Created the web application based on the consultation with a UX designer',
    'Familiarized myself with TypeScript, React, JavaScript, and NestJS to build a working web application',
    'Conveyed the importance and utility of the Progressive Web Application in a companywide intern expo',
]

const InternOne:React.FC<{}> = () => {
    const props: IExperience = {
        company: company, 
        position: position,
        time_served: time_served,
        details: details,
        sh: 'intern-one',
    }

    return (<Experience {...props}/>)
}

export default InternOne;