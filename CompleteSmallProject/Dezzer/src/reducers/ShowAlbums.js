
import { LOADING_ALL, SHOW_ALBUM } from '../actions/types'
const INITIAL_STATE = {
    artists: [],
    loading: false,
};
const ShowAlbums = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOADING_ALL:
            console.log('loading state');
            return {
                loading: true,
            };

        case SHOW_ALBUM:
            console.log('success state', action.payload);
            return {
                artists: action.payload,
                loading: false,
            };

        default:
            return state
    }
};


export default ShowAlbums
