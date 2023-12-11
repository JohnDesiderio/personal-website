import React from 'react';
import Project from '../project-component';
import { IProject } from '../types';

const name = 'Bookstore Website';
const details:Array<string> = [
    'Collaborated with 4 other team members to build a full-stack bookstore website',
    'Implemented the website using Jakarta Server Pages and Tomcat',
    'Allowed users to browse books, add them to an online cart, and checkout',
    'Hosted weekly meeting with the team to discuss new features, blockers, and progress',
    'Presented the project to a class of our peers in which we identified the problems we solved'
]

const Bookstore:React.FC<{}> = () => {
    const props: IProject = {
        name: name,
        details: details,
        sh: 'bookstore',
        last: true,
    }
    
    return (<Project {...props}/>);
}

export default Bookstore;