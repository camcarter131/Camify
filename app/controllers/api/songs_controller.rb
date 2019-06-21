class Api::SongsController < ApplicationController

    def index
        @songs = Song.all
        @albums = @songs.map do |song|
            song.album
        end 
        @artists = @albums.map do |album|
            album.artist
        end 

        # debugger

    end
end
