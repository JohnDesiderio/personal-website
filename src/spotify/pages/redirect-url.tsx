import React, { useState, useEffect } from 'react';
import { Grid, Box, Button, CircularProgress } from '@mui/material';
import { IPlaylistProps, IPlaylistResponse } from '../types';
import PlaylistItem from '../components/playlist-item/playlist-item';
import { getAccessToken, getUserProfile, gatherPlaylists } from './business-logic';
import './styles.css';

const selectedPlaylists = new Set<string>();

const RedirectURL:React.FC<{}> = () => {
    const [access_token, setAccessToken] = useState<string>();
    const [displayName, setDisplayName] = useState<string | undefined>();
    const [userFlow, setUserFlow] = useState<number>(0);
    const [playlists, setPlaylists] = useState<IPlaylistResponse>();

    document.title = 'SPOTIFY MIXER | John Desiderio'

    const params = new URLSearchParams(window.location.search).get('code');

    const updatedSelectedPlaylists = (item: IPlaylistProps) => {
        if (selectedPlaylists.has(item.id)) {
            selectedPlaylists.delete(item.id);
        } else {
            selectedPlaylists.add(item.id);
        }
    }

    useEffect(() => {
        const presentChoice = async (code: string) => {
            const accessTokenRequest = await getAccessToken(code);
            if (accessTokenRequest?.status === 200) {
                setAccessToken(accessTokenRequest.data.access_token);
            }
        }

        if (params) {
            presentChoice(params);
        }
    }, [])
    
    useEffect(() => {
        const userProfileRequest = async (
            access_token: string,
            setDisplayName: React.Dispatch<React.SetStateAction<string | undefined>>,     
        ) => {
            const userProfile = await getUserProfile(access_token);
            if (userProfile?.data !== undefined) { 
                const playlists = await gatherPlaylists(access_token, userProfile.data.id);
                if (playlists?.data !== undefined) {
                    setPlaylists(playlists.data);
                }
                setDisplayName(userProfile?.data.display_name);
                setUserFlow(1);
            }
        }
        
        if (access_token) {
            userProfileRequest(access_token, setDisplayName);
        }
    }, [access_token])

    if (userFlow === 1) {
        return (
            <Grid 
                container 
                className='spotify-mixer-grid bg-blue-100 pt-24 px-16 lg:xl:2xl:px-32 text-2xl lg:text-4xl xl:2xl:text-7xl trans'
                display='flex'
                alignItems='center'
                flexDirection='column'
            >
                Hello {displayName}, you have a choice: create a new playlist with the mixed songs or add the mixed songs to an existing playlist.
                <Box display='flex' flexDirection='row' alignItems='center'>
                    <Button 
                        onClick={() => {
                            setUserFlow(0);
                        }}
                        variant='contained'
                        sx={{
                            backgroundColor: '#1E328A',
                            color: '#EFF6FE',
                            width: '120px',
                            height: '56px',
                            marginTop: '32px',
                            marginBottom: '32px',
                            marginRight: '5px',
                        }}
                    >
                        New Playlist
                    </Button>
                    <Button 
                        onClick={() => {
                            setUserFlow(2);
                        }}
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
                    >
                        Existing Playlist 
                    </Button>
                </Box>
            </Grid>
        )
    } else if (userFlow === 2) { // This should present the user with a list of playlists from their account.
        return (
            <Grid 
                container 
                className='spotify-mixer-grid bg-blue-100 pt-24'
                display='flex'
                alignItems='center'
                flexDirection='column'
            >
                <Box className='text-2xl'>Choose a Playlist!</Box>
                {playlists?.items.map(item => 
                    <PlaylistItem {...item} onChange={() => updatedSelectedPlaylists(item)}/>    
                )}
            </Grid>
        )
    } else if(userFlow === 3) {
            <Grid 
                container 
                className='spotify-mixer-grid bg-blue-100 pt-24'
                display='flex'
                alignItems='center'
                flexDirection='column'
            >
                Idk what this should do but the other choice is to mix the playlist
            </Grid>
    }

    return (
        <Grid 
            container 
            className='spotify-mixer-grid bg-blue-100 pt-24'
            display='flex'
            alignItems='center'
            flexDirection='column'
        >
            <CircularProgress/>
        </Grid>
    )
}

export default RedirectURL;

/*
<Grid 
            container 
            className='spotify-mixer-grid bg-blue-100 pt-24'
            display='flex'
            alignItems='center'
            flexDirection='column'
        >
            {params ?
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' className='mx-32 bg-blue-100'>
                    Hello {displayName}, you have a choice: add the tracks to an existing playlist or create a new playlist.



                </Box>
                : 
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' className='mx-32 bg-blue-100'>
                    Looks like you found this page by mistake and there is nothing to do at the moment... Click to the button to get redirected back to the homepage!<br/>
                    <Button 
                        variant='contained'
                        sx={{
                            backgroundColor: '#1E328A',
                            color: '#EFF6FE',
                            width: '120px',
                            height: '56px',
                            marginTop: '32px',
                            marginBottom: '32px',
                        }}
                        href='/spotify-mixer'
                    >
                        Exit
                    </Button>
                </Box>
            }
        </Grid>
*/