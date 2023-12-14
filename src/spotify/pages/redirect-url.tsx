import React, { useState, useEffect } from 'react';
import { Grid, Box, Button, CircularProgress } from '@mui/material';
import { IPlaylistProps, IPlaylistResponse } from '../types';
import PlaylistItem from '../components/playlist-item/playlist-item';
import { getAccessToken, getUserProfile, gatherPlaylists, placeTracksInPlaylist, buildThePlaylist } from './business-logic';
import './styles.css';

const selectedPlaylists = new Set<string>();

const RedirectURL:React.FC<{}> = () => {
    const [access_token, setAccessToken] = useState<string>('');
    const [displayName, setDisplayName] = useState<string>('');
    const [userId, setUserId] = useState<string>('');
    const [userFlow, setUserFlow] = useState<number>(0);
    const [playlists, setPlaylists] = useState<IPlaylistResponse>();
    const [setSize, setSetSize] = useState<number>(0);

    document.title = 'SPOTIFY MIXER | John Desiderio'

    const params = new URLSearchParams(window.location.search).get('code');

    const updatedSelectedPlaylists = (item: IPlaylistProps) => {
        if (selectedPlaylists.has(item.id)) {
            selectedPlaylists.delete(item.id);
            setSetSize(setSize - 1); 
        } else {
            selectedPlaylists.add(item.id);
            setSetSize(setSize + 1); 
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
            setDisplayName: React.Dispatch<React.SetStateAction<string>>,     
        ) => {
            const userProfile = await getUserProfile(access_token);
            if (userProfile?.data !== undefined) { 
                const playlists = await gatherPlaylists(access_token, userProfile.data.id);
                if (playlists?.data !== undefined) {
                    setPlaylists(playlists.data);
                }
                setDisplayName(userProfile?.data.display_name);
                setUserId(userProfile?.data.id);
                setUserFlow(1);
            }
        }
        
        if (access_token) {
            userProfileRequest(access_token, setDisplayName);
        }
    }, [access_token])

    useEffect(() => {
        if (userFlow === 3) {
            setUserFlow(4)
        }
    }, [userFlow])

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
                            buildThePlaylist(
                                access_token,
                                userId,
                                displayName, 
                                setUserFlow,
                            )
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
                <Box className='text-2xl'>Choose the Playlist(s)!</Box>
                <Box 
                    display='flex'
                    alignItems='center'
                    flexDirection='column'
                    className='trans mt-5 h-[400px]'
                    sx={{
                        overflowY: 'scroll',
                    }}
                >
                    {playlists?.items.map((item, idx)  => 
                        <PlaylistItem {...item} key={`playlist-item-${idx}`} onChange={() => updatedSelectedPlaylists(item)}/>    
                    )}
                </Box>
                <Button
                    onClick={() => {
                        placeTracksInPlaylist(
                            Array.from(selectedPlaylists),
                            access_token,
                            setUserFlow,
                        ); 
                    }}
                    disabled={setSize === 0}
                    variant='contained'
                    sx={{
                        backgroundColor: '#1E328A',
                        color: '#EFF6FE',
                        width: '120px',
                        height: '56px',
                        marginTop: '32px',
                        marginBottom: '32px',
                    }}
                >
                    Submit
                </Button>
            </Grid>
        )
    } else if (userFlow === 4) {
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