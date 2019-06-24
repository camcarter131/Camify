import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../actions/albums_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlists_actions';
import merge from 'lodash/merge';

export const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = merge({}, state);
    switch (action.type) {
        case RECEIVE_ALBUMS: 
            return merge(nextState, action.albums)
        case RECEIVE_ALBUM:
            nextState[Object.values(action.album)[0].id] = Object.values(action.album)[0];
            return nextState;
        case RECEIVE_PLAYLIST:
            return merge({}, state, action.payload.albums)
        default:
            return state; 
    } 
}; 