import axios from 'axios'
import {client_id, redirect_uri} from './credentials'
// Spotify authorization endpoints
const authorizationEndPoint = "https://accounts.spotify.com/authorize?";

// Scopes for authorization 
const scopes = ["user-library-read", "playlist-read-private", "playlist-modify-public"];

// Redirect user to Spotify login page
export const loginEndPoint = `${authorizationEndPoint}client_id=${client_id}&redirect_uri=${redirect_uri}
&scopre=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const apiURL = axios.create({
    baseURL : "https://api.spotify.com/v1/",
});

export const setUrlToken = (token) => {
    apiURL.interceptors.request.use(async function(config){
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
}

export default apiURL;