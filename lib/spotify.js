import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-email",
  "user-read-private",
  "user-follow-modify",
  "user-follow-read",
  "streaming",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  "playlist-read-collaborative",
  "playlist-read-private",
  "user-library-read",
].join(",");

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };
