import React, { useState } from 'react';
import { Grid, Button, Modal, Box } from '@mui/material';
import { getAllDocuments, redirectToAuthCodeFlow } from '../../components/buttons/business-logic'; 

const client_id = process.env.REACT_APP_CLIENT_ID;

const ButtonGrid:React.FC<{}> = () => {
    const [emptyModal, setEmptyModal] = useState<boolean>(false);

    const checkDocuments = async () => {
        const docSize = await getAllDocuments();

        if (docSize === 0) {
            setEmptyModal(true);
        } else {
            if (client_id !== undefined) {
                redirectToAuthCodeFlow(client_id);
            }
        }
    }

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
                onClick={checkDocuments}
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
            <Modal
                disableAutoFocus
                open={emptyModal}
            >
                <Box display='flex' className='w-screen h-screen' justifyContent='center' alignItems='center'>
                    <Box 
                        sx={{
                            overflowY: 'scroll',
                        }}
                        className='flex flex-col rounded-lg bg-gray-200 w-10/12 h-4/6' justifyContent='center' alignItems='center'
                    >
                        <Box className='text-md response-grid mt-4 px-10 lg:xl:2xl:px-20 lg:xl:2xl:text-3xl'>
                            It would appear that the cloud storage is empty... So I think you should start adding some music and
                            and get the party rolling!!!
                        </Box>
                        <Button
                            onClick={() => setEmptyModal(false)}
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

export default ButtonGrid; 