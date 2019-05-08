import * as AlbumsAPIUtil from '../util/albums_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

export const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS,
    albums
});

export const receiveAlbum = (album) => ({
    type: RECEIVE_ALBUM,
    album
});

// -------------------------------------------------------------- //

export const receiveAllAlbums = () => dispatch => (
    AlbumsAPIUtil.receiveAllAlbums().then(albums => dispatch(receiveAlbums(albums))));

export const receiveOneAlbum = (id) => dispatch => (
    AlbumsAPIUtil.receiveOneAlbum(id).then(album => dispatch(receiveAlbums(album))));