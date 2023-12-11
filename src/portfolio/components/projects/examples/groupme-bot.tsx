import React from 'react';
import Project from '../project-component';
import { IProject } from '../types';

const name = 'Spotify Queue Bot for GroupMe Groupchats';
const details:Array<string> = [
    'Produced a web application that allows users to queue music from a GroupMe groupchat',
    'Utilized the free GroupMe API bot and the premium Spotify Playback API as the foundation of the application',
    'Structured the application with the Python web framework Flask to accept messages from the GroupMe bot',
    'Deployed the application on a free web hosting platform (render.com)',
    'Tested the application using separate environments to avoid spamming users with messages',
    'Managed different requests to and from the application for a seamless operation', 
    'Made the code available on GitHub should anyone want to clone the repository and build a more complex application in the future',
]
const link = 'https://github.com/JohnDesiderio/backend-project'

const GroupMeBot:React.FC<{}> = () => {
    const props: IProject = {
        name: name,
        details: details,
        sh: 'groupme-bot',
        link: link
    }
    
    return (<Project {...props}/>);
}

export default GroupMeBot;