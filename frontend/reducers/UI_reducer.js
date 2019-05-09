import { PLAY_SONG } from '../actions/UI_actions';
import merge from 'lodash/merge';
import ReactPlayer from 'react-player';
import { RECEIVE_PLAYLIST, START_LOADING } from '../actions/playlists_actions';


export const UIReducer = (state = {}, action) => {
    Object.freeze(state);
    let audio = document.getElementById("react-player");
    // let currentTime = audio.getCurrentTime();
    // debugger
    let nextState = merge({}, state);
    switch (action.type) {
        case PLAY_SONG:
            if (!nextState['currentSong']) {
                nextState['currentSong'] = action.song;
                nextState['isPlaying'] = true;
            }
            else if (nextState['isPlaying'] === false) {
                // let currentTime = audio.currentTime();
                nextState['isPlaying'] = true;
            }
            // Song was playing. Set nextState property saying where the song was in time.
            else {
                // let currentTime = audio.getCurrentTime();
                // debugger
                nextState['isPlaying'] = false          
            }
            return nextState;
        case START_LOADING:
            nextState['loading'] = true;
            return nextState;
        case RECEIVE_PLAYLIST:
            nextState['loading'] = false;
            return nextState;      
        default:
            return state;
    }
};
