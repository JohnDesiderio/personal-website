import React from 'react';
import { Box, Divider, Link } from '@mui/material';


const SpotifyMixerAbout:React.FC<{}> = () => {
    
    document.title = 'ABOUT SPOTIFY MIXER | John Desiderio'
    
    return (
        <Box 
            display='flex' 
            flexDirection='column' 
            justifyContent='start'
            className='mx-8 mt-8'
        >
            <Box
                className='text-6xl'
            >
                Spotify Playlist Mixer About
            </Box>
            <Divider/>
            <Box
                className='text-2xl font-medium mt-4'
            >
                What does it do?
            </Box>
            <Box
                className='text-lg mt-1 mb-1'
            >
                The Spotify Playlist Mixer is an application where users anonymously submit songs
                to a cloud storage, with registered Spotify users 'mixing the songs' by downloading
                the music that best fits together. The downloaded music is inserted into a new playlist,
                or the users can add the tracks to an existing playlist on their Spotify account. I took
                the idea from the Spotify 
                <Link
                    underline="none"
                    href='https://newsroom.spotify.com/2021-08-31/how-spotifys-newest-personalized-experience-blend-creates-a-playlist-for-you-and-your-bestie/'
                > Blend </Link> 
                where, on the Spotify application, you gather a group of friends and blend the music tastes 
                so that Spotify creates a playlist that best fits everyone's taste. My thought process for
                creating this application was to address the problem of including people who might not have
                many friends on Spotify or people who are curious about finding new music. There something a
                little more personal about a stranger recommending you music as compared to an algorithm.
            </Box>
            <Divider/>
            <Box
                className='text-2xl font-medium mt-4'
            >
                But doesn't this application use math?
            </Box>
            <Box
                className='text-lg mt-1 mb-1'
            >
                Yes, the idea for the application is to recommend new music that best fits certain standards.
                Spotify has a robust <Link underline='none' href='https://developer.spotify.com/documentation/web-api'>API </Link>
                that offers a variety of services from searching for a track to song analysis. I want to leverage key features of
                Spotify's song analysis API, and create a more nuanced way of filtering music that doesn't use certain labels to discern
                the difference between tracks. I believe the metrics offered within Song Analysis can create an experience for users
                to find music they like in new genres because of shared numerical features between tracks.
            </Box>
            <Divider/>
            <Box
                className='text-2xl font-medium mt-4'
            >
                So is this machine learning?
            </Box>
            <Box
                className='text-lg mt-1 mb-1'
            >
                No, absolutely not, as that is explicitly <Link underline='none' href="https://developer.spotify.com/terms#section-iv-restrictions">outlawed </Link>
                the Spotify API guidelines. <Link underline='none' href='https://en.wikipedia.org/wiki/Machine_learning'>Machine learning </Link> implies the use of 
                algorithms to perform tasks without explicit instruction, and <strong>that is not what I am doing</strong>. Instead, I want to implement an 
                algorithm that can discern outliers based on a set of features. The solution I had in mind was to leverage the <Link underline='none' href='https://en.wikipedia.org/wiki/Multivariate_normal_distribution'>
                Multivariate Gaussian Distribution</Link> and calculate the probability of a given item appearing in the set. If the probability is too small, then the
                algorithm will filter it out. An important note to make about the application is that when user 'mixes the songs' and downloads them into their Spotify
                account, the cloud storage empties itself. That means the algorithm will wait until there is a new set of entries before applying a new filtering mechanism
                on them. Each instance of filtering music is independent of each other, so the algorithm does not learn anything based on previous snapshots of data.
            </Box>
            <Divider/>
            <Box
                className='text-2xl font-medium mt-4'
            >
                How did you accomplish building this project?
            </Box>
            <Box
                className='text-lg mt-1 mb-1'
            >
                I created the UI using React, and I implemented business logic using the Axios request library and RxJS Observables. The application sends and pulls data from a
                Firebase Firestore, implementing BAAS (Backend As A Service). I have not figured out out how to correctly implement a probability calculator for the Multivariate Guassian
                Distribution, so the application only filters music based on one feature at the moment, but if anyone would like to work with me, 
                please contact me at johnfrancisdesiderio2@gmail.com.
            </Box>
            <Divider/>
            <Box
                className='text-2xl font-medium mt-4'
            >
                Can I use the application right now?
            </Box>
            <Box
                className='text-lg mt-1 mb-1'
            >
                The application is still in development mode, and I am awaiting Spotify's approval to put the application into production mode. If you would want to work on the application,
                shoot me an email at johnfrancisdesiderio2@gmail.com and I will add you to the team.
            </Box>
            <Divider/>
            <Box
                className='text-2xl font-medium mt-4'
            >
                Can I see the source code?
            </Box>
            <Box
                className='text-lg mt-1 mb-1'
            >
                Yeah, sure! The root directory for the code is&nbsp;
                <Link
                    underline='none'
                    href='https://github.com/JohnDesiderio/personal-website/tree/main/src/spotify'
                >
                    here
                </Link>
                .
            </Box>
        </Box>
    )
}

export default SpotifyMixerAbout;