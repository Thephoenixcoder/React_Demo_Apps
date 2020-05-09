
import { LOADING_ALL, SHOW_ALL } from '../actions/types'
const INITIAL_STATE = {
    musics: [],
    loading: false,
};
const showMusicGenres = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOADING_ALL:

            return {
                loading: true,
            };

        case SHOW_ALL:

            return {
                musics: action.payload,
                loading: false,
            };

        default:
            return state
    }
};

export default showMusicGenres