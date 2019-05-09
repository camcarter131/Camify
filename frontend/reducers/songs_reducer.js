import { RECEIVE_SONGS } from '../actions/songs_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlists_actions';
import merge from 'lodash/merge';

export const songsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONGS:
            // return merge({}, state, action.songs)
            return action.songs;
        case RECEIVE_PLAYLIST:
            // return merge({}, state, action.payload.songs)
            return action.payload.songs || {};
        default:
            return state;
    } 
};
