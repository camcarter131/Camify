import { PLAY_PAUSE_SONG, NEXT_SONG, PREV_SONG, PLAY_PLAYLIST, SET_VOLUME } from '../actions/UI_actions';
import merge from 'lodash/merge';
import ReactPlayer from 'react-player';
import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, START_LOADING } from '../actions/playlists_actions';
import { RECEIVE_SONGS } from '../actions/songs_actions';
import { RECEIVE_ARTISTS } from '../actions/artists_actions';
import { RECEIVE_ALBUMS, RECEIVE_ALBUM, PLAY_ALBUM } from '../actions/albums_actions';



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
            if (!nextState['currentSong']) nextState['currentSong'] = Object.values(action.payload.songs)[0];
            nextState['loading'] = false;
            return nextState;  
        case RECEIVE_PLAYLISTS: 
            nextState['loading'] = false;
            return nextState;  
        case RECEIVE_SONGS: 
            if (!nextState['currentSong']) {
                nextState['currentSong'] = Object.values(action.songs)[0];
                nextState['volume'] = 0.8;
            }
            if (!nextState['queue']) nextState['queue'] = Object.values(action.songs).slice(1);
            nextState['loading'] = false;
            return nextState;      
        case RECEIVE_ARTISTS:
            nextState['loading'] = false;
            return nextState;      
        case RECEIVE_ALBUMS:
            nextState['loading'] = false;
            return nextState; 
        case RECEIVE_ALBUM:
            if (!nextState['currentSong']) {
                nextState['currentSong'] = Object.values(action.album)[0].songs[0];
                nextState['volume'] = 0.8;
            }
            if (!nextState['queue']) nextState['queue'] = Object.values(action.album)[0].songs.slice(1);
            return nextState;
        case NEXT_SONG:
            if (action.song[0]) {
                nextState['currentSong'] = action.song[0];
                if (!nextState['backQueue']) {
                    nextState['backQueue'] = [action.song[1]];
                } else {
                    nextState['backQueue'] = [action.song[1]].concat(nextState['backQueue']);
                }
            }
            return nextState;
        case PREV_SONG:
            if (action.song[0]) {
                nextState['currentSong'] = action.song[0];
                if (!nextState['queue']) {
                    nextState['queue'] = [action.song[1]];
                } else {
                    nextState['queue'] = [action.song[1]].concat(nextState['queue']);
                }
            }
            return nextState;
        case PLAY_PLAYLIST:
            if (action.songs.length > 0) {
                nextState['queue'] = action.songs.slice(1);
                nextState['currentSong'] = action.songs[0];
                nextState['volume'] = 0.8;
                nextState['isPlaying'] = true;
            }
            return nextState;
        case PLAY_ALBUM:
            if (action.songs.length > 0) {
                nextState['queue'] = action.songs.slice(1);
                nextState['currentSong'] = action.songs[0];
                nextState['volume'] = 0.8;
                nextState['isPlaying'] = true;
            }
            return nextState;
        case SET_VOLUME:

            return nextState
        default:
            return state;
    }
};
