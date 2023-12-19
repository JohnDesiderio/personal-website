import React, { useState } from 'react';
import { Grid, Typography, Modal, Box, Button } from '@mui/material';
import SpotifyThanks from '../spotify-thanks/SpotifyThanks';
import ButtonGrid from '../buttons/button-grid';
import SearchBar from '../search-bar-grid/search-bar';
import './styles.css';

const SpotifyMixerGrid:React.FC<{}> = () => {
    const [startUpModal, setStartUpModal] = useState<boolean>(true);

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
            <Modal
                disableAutoFocus
                open={startUpModal}
            >
                <Box display='flex' className='w-screen h-screen' justifyContent='center' alignItems='center'>
                    <Box 
                        sx={{
                            overflowY: 'scroll',
                        }}
                        className='flex flex-col rounded-lg bg-gray-200 w-10/12 h-4/6' justifyContent='center' alignItems='center'
                    >
                        <Box className='text-md response-grid mt-4 px-10 lg:xl:2xl:px-20 lg:xl:2xl:text-3xl'>
                            So here's the deal: the application is still in <strong>development</strong>. That means certain features are unavailable.
                            You can search songs and add them, but the mixing feature will remain unavailable for the time being. I'm
                            waiting on approval from Spotify and will go live with it ASAP. HMU if you want me to demo tho it's kinda cool.
                        </Box>
                        <Button
                            onClick={() => setStartUpModal(false)}
                            variant='contained'
                            sx={{
                                backgroundColor: '#1E328A',
                                color: '#EFF6FE',
                                width: '120px',
                                height: '56px',
                                marginTop: '10px'
                            }}
                        >Exit</Button>
                    </Box>
                </Box>
            </Modal>
        </Grid>
    )
}

export default SpotifyMixerGrid;