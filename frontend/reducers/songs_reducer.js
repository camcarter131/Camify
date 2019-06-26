import { RECEIVE_SONGS, REMOVE_SONG } from '../actions/songs_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlists_actions';
import merge from 'lodash/merge';

export const songsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONGS: 
            // debugger
            return action.songs;
        case REMOVE_SONG:
            let nextState = merge({}, state);
            delete nextState[action.id];
            return nextState;
        case RECEIVE_PLAYLIST:
            
            return action.payload.songs || {};
        default:
            return state;
    } 
};
