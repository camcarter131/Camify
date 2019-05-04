class Api::PlaylistsController < ApplicationController

    def create 
        @playlist = Playlist.new(playlist_params)
        if @playlist.save!
            render "api/playlists/show"
        else
            render json: ["Please enter a valid name"], status: 422
        end 
    end

    def show
        @playlist = Playlist.find(params[:id])
        render json: :show;
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        if @playlist
            # How to delete playlist from db?
            # also must delete rows from playlist_song table
            render "api/playlists/show"
        else
            render json: ["No playlist"], status: 404
        end
    end

    def playlist_params
        params.require(:playlist).permit(:name, :user_id)
    end


end
