import React from 'react';
import SpotifyMixerGrid from './components/grid/spotify-mixer-grid';

const SpotifyMixer:React.FC<{}> = () => {

    document.title = 'SPOTIFY MIXER | John Desiderio'

    return (
        <SpotifyMixerGrid/>
    )
}

export default SpotifyMixer;