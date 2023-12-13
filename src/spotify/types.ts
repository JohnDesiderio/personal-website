// Types used everywhere in the application

// Used for Spotify song analysis endpoint request
export interface ISpotifyDanceability {
    acousticness: number,
    analysis_url: string,
    danceability: number,
    duration_ms: number,
    energy: number,
    id: string,
    instrumentalness: number,
    key: number,
    liveness: number,
    loudness: number,
    mode: number,
    speechiness: number,
    tempo: number,
    time_signature: number,
    track_href: string,
    type: string,
    uri: string,
    valence: number,
} 

// Data structure stored in Firebase Firestore
export interface track {
    id: string,
    uri: string,
    metrics: ISpotifyDanceability,
}

export interface ISpotfiyAccessToken {
    access_token: string,
    token_type: string,
    expires_in: number,
}

// Structures involved in Spotify Response object when searching for track
export interface IArtist {
    name: string,
}

interface IImageUrl {
    url: string,
}

export interface ISpotifyTrack {
    id: string,
    album: {
        name: string, 
        artists: Array<IArtist>,
        images: Array<IImageUrl>,
        uri: string,
    },
    name: string,
    uri: string,
    external_urls: {
        spotify: string, 
    }
}

// Expected Structure with 200 response
export interface ISpotifyResponse {
    tracks: {
        items: Array<ISpotifyTrack>,
    }
}

// Might want to consider small and large image
export interface ITrack {
    song: string,
    album: string,
    artist: string | undefined, 
    image?: string | undefined,
    id: string,
    uri: string,
    metrics: ISpotifyDanceability,
    external_url: string,
}

// Request user's profile on redirect page
export interface IUserProfile {
    country: string,
    display_name: string,
    email: string,
    explicit_content: {
        filter_enabled: boolean,
        filter_locked: boolean,
    },
    external_urls: {
        spotify: string,
    },
    followers: {
        href: string,
        total: number,
    },
    href: string,
    id: string, 
    images: Array<{
        url: string,
        height: number,
        width: number,
    }>,
    product: string,
    type: string,
    uri: string,
}

// Request to create user's playlist
export interface ICreatePlaylist {
    collaborative: boolean,
    description: string,
    external_urls: Array<any>,
    followers: {
        href: string | null,
        total: number,
    },
    href: string,
    id: string, // most useful part from the playlist
}

// Keep track of this for a function???
export interface IAddTracksToPlaylist {
    snapshot_id: string,
}

export interface IPlaylistResponse {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: Array<IPlaylistProps>,
}

export interface IPlaylistProps {
    collaborative: boolean,
    description: string,
    external_urls: {
        spotify: string,
    },
    href: string,
    id: string,
    images: Array<{
        url: string,
        height: number,
        width: number,
    }>,
    name: string,
    owner: {
        external_urls: {
            spotify: string,
        },
        followers: {
            href: string,
            total: number,
        },
        href: string,
        id: string,
        type: string,
        uri: string,
        display_name: string | null,
    },
    public: boolean,
    snapshot_id: string,
    tracks: {
        href: string,
        total: number,
    },
    type: string,
    uri: string,
}