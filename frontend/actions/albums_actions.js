import * as AlbumsAPIUtil from '../util/albums_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const START_LOADING = 'START_LOADING'; 
export const PLAY_ALBUM = 'PLAY_ALBUM'; 

export const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS, 
    albums  
});

export const receiveOneAlbum = (album) => ({
    type: RECEIVE_ALBUM,
    album  
});  

export const startLoading = () => ({
    type: START_LOADING
});

export const playAlbum = songs => ({
    type: PLAY_ALBUM,
    songs
});

// -------------------------------------------------------------- //

export const receiveAllAlbums = () => dispatch => {
    dispatch(startLoading());
    return AlbumsAPIUtil.receiveAllAlbums().then(albums => dispatch(receiveAlbums(albums)))
};

export const receiveAlbum = (id) => dispatch => (
    AlbumsAPIUtil.receiveAlbum(id).then(album => dispatch(receiveOneAlbum(album)))); 