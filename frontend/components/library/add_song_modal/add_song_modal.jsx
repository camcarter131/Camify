import React from 'react';
import PlaylistInModalContainer from '../add_song_modal/playlist_in_modal_container';
import GridLoader from 'react-spinners/GridLoader';

class AddSongModal extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {getPlaylists: false};
    } 

    componentDidMount() {
        // if (this.state.getPlaylists) 
        this.props.receiveAllPlaylists();
    }

    render() { 
        // debugger
        // const { loading } = this.props;
        // if (loading) return (
        //     <div id="loader-songs">
        //         <GridLoader id="beatloader"
        //             color={'#DFE2E1'}
        //             loading={loading} />
        //     </div>
        // );
        const playlists = this.props.playlists.map(playlist => {
            return (
                <PlaylistInModalContainer
                    key={playlist.id}
                    playlist={playlist}
                    name={playlist.name}
                    song={this.props.song}
                    addSongToPlaylist={this.props.addSongToPlaylist}
                />
            );
        });
        const { song, show, handleClose, addSongToPlaylist } = this.props;
        const showHideClassName = show ? "modal display-block" : "modal display-none";
        return ( 
            <div className={showHideClassName}>
                <div className="add-song-modal-close">
                    <button className="modal-close-button" onClick={handleClose}>
                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#fff"></path>
                        </svg>
                    </button> 
                </div>
                <div className="add-song-modal-header">
                    <h1>Add to playlist</h1>
                </div>
                <div className="modal-playlists">
                    {playlists}
                </div>
            </div>
        );
    }
};

export default AddSongModal;  