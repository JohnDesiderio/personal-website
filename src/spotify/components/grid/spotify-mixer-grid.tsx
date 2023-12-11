import React from 'react';
import { Grid, Typography } from '@mui/material';
import SpotifyThanks from '../spotify-thanks/SpotifyThanks';
import ButtonGrid from '../buttons/button-grid';
import SearchBar from '../search-bar-grid/search-bar';
import './styles.css';

const SpotifyMixerGrid:React.FC<{}> = () => {
    
    return (
        <Grid 
            container 
            className='spotify-mixer-grid bg-blue-100 pt-24'
            display='flex'
            alignItems='center'
            flexDirection='column'
        >
            <Typography 
                display='block'
                sx={{
                    fontSize: '1.5rem',
                }}
            >
                Spotify Song Mixer for Friends!
            </Typography>
            <SpotifyThanks/>
            <ButtonGrid/>
            <SearchBar/>
        </Grid>
    )
}

export default SpotifyMixerGrid;