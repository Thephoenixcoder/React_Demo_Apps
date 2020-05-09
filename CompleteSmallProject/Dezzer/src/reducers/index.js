
import showMusicGenres from './ShowMusic'
import ShowAlbums from './ShowAlbums'
import { combineReducers } from 'redux'


export default combineReducers({

    showMusics: showMusicGenres,
    showAlbums: ShowAlbums
})


