
// first login and send to this website VVV
export const authEndpoint = 'https://accounts.spotify.com/authorize';

// if authorized, redirect to homepage (localhost)
const redirectUri = 'http://localhost:3000/';

const clientId = '537ec8354b094138b5f7d4704dbc5551';

// reading from API
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            // #accessToken=mysupersecretkey&name=tejas&age=20
            // split at equal sign, then 
            let parts = item.split('=')
            // gets "accessToken", decode the supersecretkey
            initial[parts[0]] = decodeURIComponent(parts[1]); 
            
            return initial;
        }, {});

}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


