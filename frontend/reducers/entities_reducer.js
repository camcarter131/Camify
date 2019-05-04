import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { playlistsReducer } from './playlists_reducer';
import { songsReducer } from './songs_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    playlists: playlistsReducer,
    songs: songsReducer
});

export default entitiesReducer;