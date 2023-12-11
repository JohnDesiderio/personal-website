import React from 'react';
import Project from '../project-component';
import { IProject } from '../types';

const name = 'Anonymous Spotify Playlist Mixer';
const details:Array<string> = [
    'Constructed a web application where anonymous users submit Spotify tracks to a global database',
    'Empowered current Spotify users to download songs into a new or existing Spotify playlist',
    'Applied an algorithm that filters the added tracks based on similar ‘danceability’ metrics for the created playlist',
    'Utilized TypeScript and React for the front-end part of the application that followed Spotify’s app guidelines',
    'Maintained a Firebase NoSQL database to manage all the songs the anonymous users added',
    'Designed applicaiton through the asynchronous reactive programming library RxJS',
    'Awaiting approval from Spotify to put the application into production mode (the app is available for a demo)'
]
const link = 'https://github.com/JohnDesiderio/playlist-app'

const SpotifyMixer:React.FC<{}> = () => {
    const props: IProject = {
        name: name,
        details: details,
        sh: 'spotify-mixer',
        link: 'https://github.com/JohnDesiderio/playlist-app',
    }
    
    return (<Project {...props}/>);
}

export default SpotifyMixer;