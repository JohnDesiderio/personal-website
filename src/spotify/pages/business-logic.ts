import { doc, getDocs, deleteDoc, getFirestore } from 'firebase/firestore';
import { tracksCol } from '../composables/useDb';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { generate } from 'random-words';
import { track, IUserProfile, ICreatePlaylist, IAddTracksToPlaylist, ISpotfiyAccessToken, IPlaylistResponse } from '../types';
import translate from 'translate';
import { Observable, from, filter } from 'rxjs';

// This is different from the getAccessToken in /search-bar-grid/business-logic
export const getAccessToken = async (
    code: string,
):Promise<AxiosResponse<ISpotfiyAccessToken> | undefined> => {
    const verifier = localStorage.getItem("verifier");

    const config : AxiosRequestConfig = {
        method: 'POST',
        url: 'https://accounts.spotify.com/api/token',
        data: {
            client_id: process.env.REACT_APP_CLIENT_ID,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: process.env.REACT_APP_REDIRECT_URI,
            code_verifier: verifier!,
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }

    try {
        return await axios.request(config)
    } catch (e) {
        console.log(e);
    } 
}

export const getUserProfile = async (
    access_token: string, 
): Promise<AxiosResponse<IUserProfile> | undefined> => {
    const config : AxiosRequestConfig = {
        method: 'GET',
        url: 'https://api.spotify.com/v1/me',
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    }

    try {
        return await axios.request(config);
    } catch (e) {
        console.log(e);
    }
}

export const createThePlaylist = async (
    access_token: string,
    userId: string,
    userProfile: string,
):Promise<AxiosResponse<ICreatePlaylist> | undefined> => {
    const playlistName = generate({ exactly: 3, join: ' ', minLength: 5, maxLength: 10 });
    const frenchPlaylistName = await translate(playlistName, { to: 'fr' })

    const config: AxiosRequestConfig = {
        method: 'POST', 
        url: `https://api.spotify.com/v1/users/${userId}/playlists`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access_token}`,
        },
        data: {
            "name": frenchPlaylistName,
            "description": `A playlist belonging to ${userProfile} containing all the songs submitted to johndesiderio.com/spotify-mixer. Thank you for using the app, I hope you enjoy the music!`,
            'public': "true",
        }, 
    };

    try {
        return await axios.request(config);
    } catch (e) {
        console.log(e);
    }
}

export const gatherPlaylists = async (
    access_token: string,
    user_id: string,
):Promise<AxiosResponse<IPlaylistResponse> | undefined> => {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: `https://api.spotify.com/v1/users/${user_id}/playlists`,
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        data: {
            limit: '10',
            offset: '0',
        }
    }

    try {
        return await axios.request(config);
    } catch (e) {
        console.log(e);
    }
}


export const placeTracksInPlaylist = async (
    playlistIds: Array<string>,
    access_token: string,
    userWaiting: React.Dispatch<React.SetStateAction<number>>
) => {
    userWaiting(0);
    const docIds = await assembleDocIds();

    const vals = new Array<number>();

    docIds.forEach(item => {
        vals.push(item.metrics.danceability);
    });

    const bounds = findOutlierBoundaries(vals);

    const playlistSongs$ : Observable<track> = from(docIds);
    const req_body = new Array<string>();

    playlistSongs$
    .pipe(filter(track => outlierDetection(track.metrics.danceability, bounds)))
    .subscribe({
        next: (item) => {

            if (req_body.length === 100) {
                playlistIds.forEach(playlist_id => {
                    addTracksToPlaylist(access_token, playlist_id, req_body);
                });
                req_body.length = 0; 
            }
            
            req_body.push(item.uri);
        },
        error: () => {},
        complete: () => {
            playlistIds.forEach(playlist_id => {
                addTracksToPlaylist(access_token, playlist_id, req_body);
            });
        },
    });

    playlistSongs$.subscribe().unsubscribe();
    userWaiting(3);
}

export const addTracksToPlaylist = async (
    access_token: string, 
    playlistId: string,
    documentId: Array<string>,
):Promise<AxiosResponse<IAddTracksToPlaylist> | undefined> => {
    const config: AxiosRequestConfig = {
        method: "POST",
        url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json',
        },
        data: {
            "uris": documentId,
            "position": 0,
        }
    };


    try {
        return await axios.request(config);
    } catch (e) {
        console.log(e);
    } 
}

export const assembleDocIds = async ():Promise<Array<track>> => {
    const tracks = await getDocs(tracksCol);
    const tracksIds = new Array<track>();
    
    const db = getFirestore(); 

    tracks.forEach(document => {
        tracksIds.push(document.data());
        deleteDoc(doc(db, 'tracks', document.id));
    });

    return tracksIds;
}

export const buildThePlaylist = async (
    access_token: string,
    userId: string,
    displayName: string,
    userWaiting: React.Dispatch<React.SetStateAction<number>>, 
):Promise<void> => {
    const playlistId = (await createThePlaylist(access_token, userId, displayName))?.data.id;
    const docIds = await assembleDocIds();

    if (playlistId !== undefined) {
        userWaiting(0)

        const vals = new Array<number>(); // Danceability metrics to calculate outliers

        docIds.forEach(item => {
            vals.push(item.metrics.danceability);
        });

        const bounds = findOutlierBoundaries(vals);

        const playlistSongs$ : Observable<track> = from(docIds);
        const req_body = new Array<string>();

        playlistSongs$
        .pipe(filter(track => outlierDetection(track.metrics.danceability, bounds)))
        .subscribe({
            next: (item) => {
                if (req_body.length === 100) {
                    addTracksToPlaylist(access_token, playlistId, req_body);
                    req_body.length = 0;
                }

                req_body.push(item.uri);
            },
            error: () => {
                console.log('There has been an error');
            },
            complete: () => {
                addTracksToPlaylist(access_token, playlistId, req_body);
            }
        });

        playlistSongs$.subscribe().unsubscribe();
        userWaiting(3);
    }
}


interface IOutlierDetection {
    lower_bound: number,
    upper_bound: number,
}

export const findOutlierBoundaries = (
    arr: Array<number>
): IOutlierDetection => {
    const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;

    const std = Math.sqrt(
        arr
            .reduce((acc, val) =>  acc.concat((val - mean) ** 2), [] as number[])
            .reduce((acc, val) => acc + val, 0) /
            (arr.length)
    )

    const d_v = 1; // Deviation setting to control the threshold for outliers

    const outliers: IOutlierDetection = {
        upper_bound: mean + (d_v * std) > 1 ? 1 : mean + (d_v * std),
        lower_bound: mean - (d_v * std) < 0 ? 0 : mean - (d_v * std),
    };

    return outliers;
}

// This is used in the rxjs predicate
export const outlierDetection = (
    score: number, 
    bounds: IOutlierDetection,
): boolean => {
    return (score < bounds.upper_bound && score > bounds.lower_bound);
}