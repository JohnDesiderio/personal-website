import React from 'react';
import { Grid, Button } from '@mui/material';
import { redirectToAuthCodeFlow } from './business-logic';

const client_id = "9dc3cfe6f686431f878571165c601f37";

const ButtonGrid:React.FC<{}> = () => {
    return (
        <Grid 
            container 
            display='flex'
            flexDirection='row'
            justifyContent='center'
            sx={{marginTop: '10px'}}
        >
            <Button
                href='/spotify-mixer/about'
                variant='contained'
                sx={{
                    backgroundColor: '#1E328A',
                    color: '#EFF6FE',
                    width: '120px',
                    height: '50px',
                    marginRight: '8px',
                }}
                
            >
                About
            </Button>
            <Button
                onClick={() => {
                    redirectToAuthCodeFlow(client_id);
                }}
                variant='contained'
                sx={{
                    backgroundColor: '#1E328A',
                    color: '#EFF6FE',
                    width: '120px',
                    height: '50px',
                    marginLeft: '8px',
                }}
            >
                Mix Songs 
            </Button>
        </Grid>
    )
}

export default ButtonGrid; 