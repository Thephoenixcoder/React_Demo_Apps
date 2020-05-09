import { getMusicGenresService } from '../services/GetMusicService'
import { LOADING_ALL, SHOW_ALL } from '../actions/types'

export const getMusicGenres = () => dispatch => {

    dispatch({ type: LOADING_ALL });
    getMusicGenresService.getMusicGenres().then(response => {
        const musicList = JSON.parse(response.data);


        dispatch({
            type: SHOW_ALL,
            payload: musicList.data
        });
    });

}

