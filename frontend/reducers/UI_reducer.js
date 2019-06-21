import { PLAY_PAUSE_SONG } from '../actions/UI_actions';
import merge from 'lodash/merge';
import ReactPlayer from 'react-player';
import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, START_LOADING } from '../actions/playlists_actions';
import { RECEIVE_SONGS } from '../actions/songs_actions';
import { RECEIVE_ARTISTS } from '../actions/artists_actions';
import { RECEIVE_ALBUMS } from '../actions/albums_actions';



export const UIReducer = (state = {}, action) => {
    Object.freeze(state);
    let audio = document.getElementById("react-player");
    // let currentTime = audio.getCurrentTime();
    let nextState = merge({}, state);
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
            nextState['currentSong'] = Object.values(action.payload.songs)[0];
            nextState['loading'] = false;
            return nextState;  
        case RECEIVE_PLAYLISTS:
            nextState['loading'] = false;
            return nextState;  
        case RECEIVE_SONGS:
            // debugger
            nextState['currentSong'] = Object.values(action.songs)[0];
            nextState['loading'] = false;
            return nextState;      
        case RECEIVE_ARTISTS:
            // debugger
            nextState['loading'] = false;
            return nextState;      
        case RECEIVE_ALBUMS:
            nextState['loading'] = false;
            return nextState;      
        default:
            return state;
    }
};
