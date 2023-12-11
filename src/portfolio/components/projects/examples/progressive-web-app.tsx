import React from 'react';
import Project from '../project-component';
import { IProject } from '../types';

const name = 'Progressive Web Application';
const details:Array<string> = [
    'Corresponded with 4 colleagues on a remote basis to discuss the progress of the application',
    'Developed a progressive web application whose functionality excelled with speed and worked in an offline environment',
    'Programmed the application using TypeScript, React, and various open-source libraries',
    'Disucessed its design with a UI/UX professional and implemented their advice throughout the development process',
    'Participated in daily mettings with colleagues where we discussed new features of the application',
    'Demoed the application in biweekly meetings with senior developers to show the application development process',
    'Presented our porject in a company wide intern expo to explain to other teams the use of our project and how it could be applied to other products in the future',
]

const ProgressiveWebApp:React.FC<{}> = () => {
    const props: IProject = {
        name: name,
        details: details,
        sh: 'progressive-web-app',
    }
    
    return (<Project {...props}/>);
}

export default ProgressiveWebApp;