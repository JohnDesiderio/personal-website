import React from "react";
import { Grid, Button } from '@mui/material';

export const SpotifyAppThanks:React.FC<{}> = () => {
    return (
        <Grid 
            container 
            className='spotify-mixer-grid bg-blue-100 pt-24 px-16 lg:xl:2xl:px-32 text-2xl lg:text-4xl xl:2xl:text-7xl trans'
            display='flex'
            alignItems='center'
            flexDirection='column'
        >
            Thank you for using my app!!!! I think you should check your spotify account!!!! Click the button and that will redirect you
            back to the homescreen!
            <Button
                href="/spotify-mixer"
                variant='contained'
                sx={{
                    backgroundColor: '#1E328A',
                    color: '#EFF6FE',
                    width: '120px',
                    height: '56px',
                    marginTop: '32px',
                    marginBottom: '32px',
                    maringLeft: '5px',
                }}
            >Go Home!</Button>
        </Grid>
    )
}

export default SpotifyAppThanks;