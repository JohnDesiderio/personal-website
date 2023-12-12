import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ISpotifyResponse, ISpotfiyAccessToken, ISpotifyTrack, ISpotifyDanceability, ITrack } from "../../types";
import { Observable, mergeMap } from 'rxjs';
import { doc, setDoc} from 'firebase/firestore';
import { tracksCol } from '../../composables/useDb';

/**
 * Authorization request to get permission to 
 * call Spotify API to search a track and
 * retrieve Spotify song analysis metrics
 * @returns {Promise<AxiosResponse<ISpotifyResponse> | undefined>} - a response containing the Spotify Access Token
 */
export const getAccessToken = async (): Promise<AxiosResponse<ISpotfiyAccessToken> | undefined> => {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: {
            'grant_type': 'client_credentials',
            'client_id': process.env.REACT_APP_CLIENT_ID,
            'client_secret': process.env.REACT_APP_CLIENT_SECRET, 
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    try {
        return await axios.request(config);
    } catch (e) {
        console.log(e);
        throw e;
    }
}

/**
 * The function creates an observable based on the results from the items array in the Spotify response
 * @param {string} access_token - The token obtained from the Promise in getAccessToken()
 * @param {string} query - The user input from the textfield search component
 * @returns {Observable<ISpotifyTrack>} An observable
 */
export const getSearchResults = (
    access_token: string,
    query: string,
):Observable<ISpotifyTrack> => {
    const config: AxiosRequestConfig = {
        url: `https://api.spotify.com/v1/search?q=${query.replaceAll(/ +/g, '+')}&type=track&market=US&limit=10`,
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }

    return new Observable(observer => {
        axios.request(config)
        .then((r: AxiosResponse<ISpotifyResponse>) => {
            r.data.tracks.items.forEach((track) => {
                observer.next(track);
            });
            observer.complete();
        })
        .catch((e: any) => {
            observer.error(e);
        });

        return () => {
            
        }
    })
}

/**
 * Request the Spotify API for the metrics on specific tracks.
 * @param {string} accessToken - The token obtained from the Promise in getAccessToken()
 * @param {ISpotifyTrack} track - The track structure containing relevant artist metadata
 * @returns {Observable<ITrack>} - An observable that contains the Axios Request for Spotify
 * song analysis on the track variable
 */
export const findDanceability = (
    access_token: string,
    track: ISpotifyTrack,
):Observable<ITrack> => {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: `https://api.spotify.com/v1/audio-features/${track.id}`,
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    }

    return new Observable<ITrack>(observer => {
        axios.request(config)
        .then((r: AxiosResponse<ISpotifyDanceability>) => {
            const moldedTrack: ITrack = {
                song: track.name,
                album: track.album.name,
                artist: track.album.artists.at(0)?.name,
                image: track.album.images.at(2)?.url,
                id: track.id,
                uri: track.uri,
                external_url: track.external_urls.spotify,
                metrics: r.data,
            }
            observer.next(moldedTrack);
            observer.complete();
        })
        .catch((e: any) => {
            observer.error(e);
        });

        return () => {

        }
    })
}

/**
 * A void function that invokes a pause modal that does not close
 * until requests complete or an error happens within the code.
 * TODO: Implement an error modal declaring something didn't work.
 * @param {string} access_token - The token obtained from the Promise in getAccessToken()
 * @param {string} query - The user input from the textfield search component
 * @param {(bool: boolean) => void} handleLoadingModal - callback function to open and close the loading modal
 * @param {(songs: Array<ITrack> | undefined) => void} setResponse - callback functions to set new state upon modal finish loading
 */
export const assembleMusic = (
    access_token: string,
    query: string,
    handleLoadingModal: React.Dispatch<React.SetStateAction<boolean>>,
    setResponse: React.Dispatch<React.SetStateAction<Array<ITrack> | undefined>>,
) => {
    handleLoadingModal(true);

    const songResults = new Array<ITrack>();

    const songs$ = getSearchResults(access_token, query)
    .pipe(
        mergeMap(song => findDanceability(access_token, song))
    )

    songs$.subscribe({
        next (x: ITrack) {
            songResults.push(x);
        },
        error (err: any) {
            console.error(err);
            setResponse(undefined);
            handleLoadingModal(false);
        },
        complete () {
            setResponse(songResults);
            handleLoadingModal(false);
        },
    })

    songs$.subscribe().unsubscribe();
}

const setNewSong = async (key: string, value: ITrack) => {
    const trackRef = doc(tracksCol, key);

    return await setDoc(trackRef, {
        id: value.id,
        uri: value.uri,
        metrics: value.metrics, 
    });
}

export const addSelectedSongs = async (selectedSongs: Map<string, ITrack>) => {
    selectedSongs.forEach((value: ITrack, key: string) => {
        setNewSong(key, value)
        .catch(e => console.log(e));
    })
}