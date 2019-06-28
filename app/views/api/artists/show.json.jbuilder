json.set! @artist.id do
    json.extract! @artist, :id, :name, :description
    json.photoUrl url_for(@artist.photo)
    json.albums @artist.albums do |album|
        json.extract! album, :id, :name
        json.artist @artist
        json.songs album.songs do |song|
            json.extract! song, :id, :name, :duration
            json.album song.album
            json.artist @artist
            json.songFile url_for(song.song_file)
        end
    end
end