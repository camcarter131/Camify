import { PLAY_PAUSE_SONG, NEXT_SONG, PREV_SONG, PLAY_PLAYLIST } from '../actions/UI_actions';
import merge from 'lodash/merge';
import ReactPlayer from 'react-player';
import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, START_LOADING } from '../actions/playlists_actions';
import { RECEIVE_SONGS } from '../actions/songs_actions';
import { RECEIVE_ARTISTS } from '../actions/artists_actions';
import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../actions/albums_actions';



export const UIReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = merge({}, state);
    switch (action.type) { 
        case PLAY_PAUSE_SONG:
            if (nextState['isPlaying'] && (action.song.id === nextState['currentSong'].id)) {
                nextState['isPlaying'] = false;
                return nextState;
            } 
            if (!nextState['isPlaying']) {
                nextState['currentSong'] = action.song;
                nextState['isPlaying'] = true;
            } else if (nextState['isPlaying'] === false) {
                nextState['isPlaying'] = true;
            }
            else if (nextState['currentSong'] != action.song) {
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
            // debugger
            if (!nextState['currentSong']) nextState['currentSong'] = Object.values(action.payload.songs)[0];
            nextState['loading'] = false;
            return nextState;  
        case RECEIVE_PLAYLISTS: 
            nextState['loading'] = false;
            return nextState;  
        case RECEIVE_SONGS: 
            // debugger
            if (!nextState['currentSong']) nextState['currentSong'] = Object.values(action.songs)[0];
            if (!nextState['queue']) nextState['queue'] = Object.values(action.songs).slice(1);
            nextState['loading'] = false;
            return nextState;      
        case RECEIVE_ARTISTS:
            // debugger
            nextState['loading'] = false;
            return nextState;      
        case RECEIVE_ALBUMS:
            nextState['loading'] = false;
            return nextState; 
        case RECEIVE_ALBUM:
            // debugger
            if (!nextState['currentSong']) nextState['currentSong'] = Object.values(action.album)[0].songs[0];
            if (!nextState['queue']) nextState['queue'] = Object.values(action.album)[0].songs.slice(1);
            return nextState;
        case NEXT_SONG:
            nextState['currentSong'] = action.song;
            return nextState;
        case PREV_SONG:
            nextState['currentSong'] = action.song;
            return nextState;
        case PLAY_PLAYLIST:
            if (action.songs.length > 0) {
                nextState['queue'] = action.songs.slice(1);
                nextState['currentSong'] = action.songs[0];
                nextState['isPlaying'] = true;
            }
            return nextState;
        default:
            return state;
    }
};
