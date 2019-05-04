import { RECEIVE_SONGS } from '../actions/songs_actions';
import merge from 'lodash/merge';

export const songsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONGS:
            return merge({}, state, action.songs)
        default:
            return state;
    }
};
