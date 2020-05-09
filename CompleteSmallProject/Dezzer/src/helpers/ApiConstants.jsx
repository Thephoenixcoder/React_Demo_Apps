export const ApplicationName = "Dizzer";
const prefix = "https://cors-anywhere.herokuapp.com/https://api.deezer.com";

const AlbumActions = {
  GetMusicGenres: " GetMusicGenres",
  AlbumsById: ""
};

export const ApiPaths = {
  GetMusicGenres: `${prefix}/genre`,
  AlbumsById: `${prefix}/genre/${AlbumActions.AlbumsById}`
};
// options = {method: "get", url: "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre//artists132", transformResponse: Array(1)}
