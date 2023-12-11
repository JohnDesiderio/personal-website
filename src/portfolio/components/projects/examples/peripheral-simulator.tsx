import React from 'react';
import Project from '../project-component';
import { IProject } from '../types';

const name = 'Peripheral Simulator';
const details:Array<string> = [
    'Collaborated with 8 other interns to introduce a project that would ease testing for developers',
    'Launched a peripheral simulator that tested the main features of the company product',
    'Introduced an alternative way to physically testing the application and its associated requirements',
    'The functions of the app provided HTTP requests that performed the same execution as the physical tools',
    'Prioritized daily meetings with senior developers to discuss new features, blockers and progress',
    'Incorporated a biweekly meeting where my team demonstrated the novel features of the application',
    'Built the application using TypeScript and React and tested the components using Jest and Cypress',
]

const PeripheralSimulator:React.FC<{}> = () => {
    const props: IProject = {
        name: name,
        details: details,
        sh: 'peripheral-simulator',
    }
    
    return (<Project {...props}/>);
}

export default PeripheralSimulator;