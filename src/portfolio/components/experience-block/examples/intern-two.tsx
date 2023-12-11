import React from 'react';
import Experience from '../experience';
import { IExperience } from '../types';

const company = 'NCR Corporation';
const position = 'Software Engineer Intern';
const time_served = 'May 2022 – August 2022';
const details = [
    'Worked in a team with eight colleagues to build a peripheral simulator application using the Agile methodology',
    'Constructed the peripheral simulator on the TypeScript language and React framework',
    'Participated in weekly meetings with a senior software engineer to assess the team’s progress and direction',
    'Utilized Cypress and Jest testing to ensure a smooth development of the application',
    'Presented the final product as a model for the development of other products in a companywide intern expo',
]

const InternTwo:React.FC<{}> = () => {
    const props: IExperience = {
        company: company, 
        position: position,
        time_served: time_served,
        details: details,
        sh: 'intern-two',
    }

    return (<Experience {...props}/>)
}

export default InternTwo;