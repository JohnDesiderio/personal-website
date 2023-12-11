/**
 * This file handles the information before a user accesses Spotify Account!
 * generateRandomString and generateCodeChallenge are security measures to
 * verify the user retrieving the token 
 */

const REDIRECT_URI : string = 'http://localhost:3000/spotify-mixer/mix-songs'//#/playlist-mixer/build-playlist';

export const generateRandomString = (length:number):string => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghhijklmopqrstuvwxyz1234567890';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

export const generateCodeChallenge = async (codeVerifier: string):Promise<string> => {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export const redirectToAuthCodeFlow = async (clientId: string):Promise<void> => {
    const verifier = generateRandomString(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", REDIRECT_URI);
    params.append("scope", "playlist-modify-private playlist-modify-public user-read-private user-read-email")
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`
}