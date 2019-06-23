class Api::AlbumsController < ApplicationController

   def index
        @albums = Album.all;
    end
 
    def show 
        @album = Album.find(params[:id])
        songs = Song.all
        debugger
    end
end
 