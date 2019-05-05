import { CREATE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlists_actions';
import merge from 'lodash/merge';

export const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = merge({}, state);
    switch (action.type) {
        case CREATE_PLAYLIST:
            nextState[action.playlist.id] = action.playlist;
            return nextState;
        case REMOVE_PLAYLIST:
            delete nextState[action.id];
            return nextState;
        default: 
            return state;
    }
};