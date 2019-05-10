import { PLAY_PAUSE_SONG } from '../actions/UI_actions';
import merge from 'lodash/merge';
import ReactPlayer from 'react-player';
import { RECEIVE_PLAYLIST, START_LOADING } from '../actions/playlists_actions';
import { RECEIVE_SONGS } from '../actions/songs_actions';



export const UIReducer = (state = {}, action) => {
    Object.freeze(state);
    let audio = document.getElementById("react-player");
    // let currentTime = audio.getCurrentTime();
    // debugger
    let nextState = merge({}, state);
    // debugger
    switch (action.type) {
        case PLAY_PAUSE_SONG:
            if (nextState['isPlaying'] && (action.song.id === nextState['currentSong'].id)) {
                nextState['isPlaying'] = false;
                return nextState;
            } 

            if (!nextState['isPlaying'] || nextState['isPlaying'] === false) {
                nextState['currentSong'] = action.song;
                nextState['isPlaying'] = true;
            } else if (nextState['currentSong'] != action.song) {
                nextState['currentSong'] = action.song;
                nextState['isPlaying'] = true;
            } else if (nextState['isPlaying']) {
                nextState['isPlaying'] = false;
            }
            return nextState;
        case START_LOADING:
            nextState['loading'] = true;
            return nextState;
        case RECEIVE_PLAYLIST:
            nextState['loading'] = false;
            return nextState;  
        case RECEIVE_SONGS:
            nextState['loading'] = false;
            return nextState;      
        default:
            return state;
    }
};
