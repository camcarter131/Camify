import { RECEIVE_ARTISTS, RECEIVE_ARTIST} from '../actions/artists_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlists_actions';
import merge from 'lodash/merge';
 
export const artistsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = merge({}, state); 
    switch (action.type) { 
        case RECEIVE_ARTISTS:
            return merge(nextState, action.artists)
        case RECEIVE_ARTIST:
            // debugger
            nextState[Object.values(action.artist)[0].id] = Object.values(action.artist)[0];
            return nextState;
        case RECEIVE_PLAYLIST:
            return merge({}, state, action.payload.artists)
        default:
            return state;
    } 
};