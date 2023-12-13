import React from 'react';
import Experience from '../experience';
import { IExperience } from '../types';

const company = 'Independent';
const position = 'Freelance Web Developer';
const time_served = 'February 2023 - Present';
const details = [
    'Discussed with clients the type of website they desired and the information needed to fulfill their request',
    'Guided clients through various portfolio templates and the best ways to show their work (mostly art and photography portfolios)',
    'Shared different prototypes of websites for clients curious about how their information could be represented',
    'Mastered libraries like React, NextJS, and Tailwind CSS to provide clients with simple and elegant solutions',
]

const FreelanceWeb:React.FC<{}> = () => {
    const props: IExperience = {
        company: company, 
        position: position,
        time_served: time_served,
        details: details,
        sh: 'freelance-web',
    }

    return (<Experience {...props}/>)
}

export default FreelanceWeb;