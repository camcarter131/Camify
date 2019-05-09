import { PLAY_SONG } from '../actions/UI_actions';
import merge from 'lodash/merge';

export const UIReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = merge({}, state);
    // debugger
    switch (action.type) {
        case PLAY_SONG:
            nextState['currentSong'] = action.song;
            if (!nextState['isPlaying'] || nextState['isPlaying'] === false) {
                nextState['isPlaying'] = true;
            } else {
                nextState['isPlaying'] = false          
            }
            return nextState;

        default:
            return state;
    }
};
