import React from 'react';
import { Box } from '@mui/material';
import { FaSpotify } from "react-icons/fa";

const SpotifyThanks:React.FC<{}> = () => {
    return (
        <Box 
            display='flex' 
            flexDirection='row'
            alignItems='center'
            sx={{
                marginTop: '6px'
            }}
        >
            <Box
                className='font-bold'
                sx={{
                    fontSize: '20px',
                    marginRight: '5px',
                }}
            >
                Powered By Spotify
            </Box>
            <FaSpotify
                style={{
                    height: '35px',
                    width: '35px'
                }}
            />
        </Box>
    )
}

export default SpotifyThanks;