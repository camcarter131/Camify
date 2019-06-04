import * as AlbumsAPIUtil from '../util/albums_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

export const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS, 
    albums
});

export const receiveOneAlbum = (album) => ({
    type: RECEIVE_ALBUM,
    album 
});

// -------------------------------------------------------------- //

export const receiveAllAlbums = () => dispatch => (
    AlbumsAPIUtil.receiveAllAlbums().then(albums => dispatch(receiveAlbums(albums))));

export const receiveAlbum = (id) => dispatch => (
    AlbumsAPIUtil.receiveAlbum(id).then(album => dispatch(receiveOneAlbum(album))));