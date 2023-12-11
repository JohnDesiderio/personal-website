import React from 'react';
import Project from '../project-component';
import { IProject } from '../types';

const name = 'Discrete Event Simulator';
const details:Array<string> = [
    'Engineered a simulation using a process-based discrete-event simulator framework called Simpy',
    'Collected information on the train system of GA to build an abstract map',
    'Calculated the shortest path for trains and cargo to help both quickly reach their destination',
    'Introduced different environment variables to help test every aspect of the simulator',
    'Operated the application by introducing variables that would stress test the simulator',
    'Gathered results for a presentation to my peers about the success of my research',
]
const link = 'https://github.com/JohnDesiderio/discrete-event-simulator';


const DiscreteEvent:React.FC<{}> = () => {
    const props: IProject = {
        name: name,
        details: details,
        sh: 'discrete-event-simulator',
        link: link,
    }
    
    return (<Project {...props}/>);
}

export default DiscreteEvent;