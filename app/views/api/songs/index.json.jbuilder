json.partial! "api/songs/songs", songs: @songs 

@songs.each do |song|
    json.set! song.album.id do
        json.partial! "api/albums/album", album: song.album 
    end
end