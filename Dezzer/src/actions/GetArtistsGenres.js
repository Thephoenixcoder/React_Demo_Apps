


import { getAristsServices } from '../services/GetArtistsService'

import { LOADING_ALL, SHOW_ALBUM } from './types'






export const getAlbums = (albumId) => dispatch => {

    dispatch({ type: LOADING_ALL });
    getAristsServices.getArtists(albumId).then(response => {

        const albumList = JSON.parse(response.data);

        dispatch({
            type: SHOW_ALBUM,
            payload: albumList.data
        });

    });

}