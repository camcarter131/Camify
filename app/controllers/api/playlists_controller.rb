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
        render "api/playlists/show"
    end

    def index
        @playlists = Playlist.all;
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        @playlist.destroy
        render json: :index
 
    end

    private 
    
    def playlist_params
        params.require(:playlist).permit(:name, :user_id)
    end


end
