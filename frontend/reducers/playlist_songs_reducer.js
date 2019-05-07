import { ADD_SONG, REMOVE_SONG, RECEIVE_PLAYLIST_SONGS } from '../actions/playlist_songs_actions';
import merge from 'lodash/merge';

export const playlistSongsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = merge({}, state);
    switch (action.type) {
        case ADD_SONG:
            // debugger
            nextState[action.playlistSong.id] = action.playlistSong;
            return nextState;
        case REMOVE_SONG:
            delete nextState[action.id];
            return nextState;
        case RECEIVE_PLAYLIST_SONGS:
            return merge({}, state, action.playlistSongs)
        default:
            return state;
    }
};
