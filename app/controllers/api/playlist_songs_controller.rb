class Api::PlaylistSongsController < ApplicationController

    def create
        
        @playlist_song = PlaylistSong.new(playlist_song_params)

        if @playlist_song.save!
            render "api/playlist_songs/show"
        else 
            render json: ["Invalid"], status: 422
        end 
    end

    def index 
        @playlist_songs = PlaylistSong.all 
    end

    def playlist_song_params
        params.require(:playlistSong).permit(:playlist_id, :song_id)
    end

end
