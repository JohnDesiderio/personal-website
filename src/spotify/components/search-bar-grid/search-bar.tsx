import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Modal, CircularProgress } from '@mui/material';
import { ITrack } from '../../types';
import { assembleMusic, getAccessToken } from './business-logic';
import ResponseGrid from './response-grid';

// Exists outside the component for rendering purposes
const mappedItems = new Map<string, ITrack>();

const SearchBar:React.FC<{}> = () => {
    const [disableSearch, setDisableSearch] = useState<boolean>(true);
    const [text, setText] = useState<string>('');
    const [clickedSearch, setClickedSearch] = useState<number>(0);
    const [access_token, setAccessToken] = useState<string>('');
    const [spotifyResponse, setSpotifyResponse] = useState<Array<ITrack> | undefined>(undefined);
    const [loadingModal, setLoadingModal] = useState<boolean>(false);

    const onTextChange = (e: any) => {
        if (/(?!^$)([^\s])/.test(e.target.value)) {
            setDisableSearch(false);
        } else {
            setDisableSearch(true);
        }
        setText(e.target.value)
    }

    // Retrieve Access Token when user opens page
    useEffect(() => {
        getAccessToken()
        .then(response =>{
            if (response?.status === 200) {
                setAccessToken(response.data.access_token);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        if (clickedSearch !== 0) {
            assembleMusic(access_token, text, setLoadingModal, setSpotifyResponse); 
        }
    }, [clickedSearch])

    return (
        <Box display='flex' flexDirection='column' className='mt-7 w-full' justifyContent='center' alignItems='center'>
            <Box display='flex' flexDirection='row'>    
                <TextField
                    label='Search a song!'
                    sx={{
                        marginRight: '10px',
                    }}
                    value={text}
                    onChange={onTextChange}
                />
                <Button
                    onClick={() => {
                        setClickedSearch(clickedSearch + 1);
                        mappedItems.clear();
                    }}
                    disabled={disableSearch} 
                    variant='contained'
                    sx={{
                        backgroundColor: '#1E328A',
                        color: '#EFF6FE',
                        width: '120px',
                        height: '56px',
                        marginLeft: '10px'
                    }}
                >
                        Search
                </Button>
            </Box>

            <ResponseGrid items={spotifyResponse} resetResponse={setSpotifyResponse} resetText={setText} selectedItems={mappedItems}/>

            <Modal // Loading modal that waits for a user to receive information
                disableAutoFocus
                open={loadingModal}
            >
                <Box display='flex' className='w-screen h-screen' justifyContent='center' alignItems='center'>
                    <Box className='flex flex-col rounded-lg bg-gray-200 w-10/12 h-4/6' justifyContent='center' alignItems='center'>
                        <CircularProgress/>
                        <Box className='text-3xl mt-4'>
                            Loading...
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default SearchBar;