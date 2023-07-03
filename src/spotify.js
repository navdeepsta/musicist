import axios from 'axios'

const authorizationEndPoint = "https://accounts.spotify.com/authorize?";
const client_id = "d9b6cf1536a24070ad61ab27d20ac1f2";
const redirect_uri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];
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