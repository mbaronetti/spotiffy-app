// REDUCERS
import {
    SHOW_MODAL,
    SEARCH_TERM,
    SET_ARTISTS,
    SET_NOW_PLAYING,
} from '../constants'

const initialState = {
    modalVisible: true,
    searchTerm: '',
}

function rootReducer(state = initialState, action) {
    if (action.type === SHOW_MODAL) {
        return { ...state, modalVisible: action.data }
    }

    if (action.type === SEARCH_TERM) {
        return { ...state, searchTerm: action.data }
    }

    if (action.type === SET_ARTISTS) {
        return { ...state, artists: action.data }
    }
    
    if (action.type === SET_NOW_PLAYING) {
        return { ...state, nowPlaying: action.data }
    }
    return state
}

export default rootReducer
