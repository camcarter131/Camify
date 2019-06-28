class Api::ArtistsController < ApplicationController

    def index
        @artists = Artist.all;
    end 

    def show 
        # debugger
        artistId = params[:id]
        if artistId == "undefined"
            artistId = 6
        end
        @artist = Artist.find(artistId)
        
    end 
end
