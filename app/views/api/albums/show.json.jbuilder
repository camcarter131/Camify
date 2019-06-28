json.set! @album.id do
    json.extract! @album, :id, :name, :artist_id, :release_year
    json.photoUrl url_for(@album.photo)
    json.artist @album.artist
    json.songs @album.songs do |song|
        json.extract! song, :id, :name, :duration
        json.songFile url_for(song.song_file)
        json.artist song.album.artist
        json.album song.album 
        json.albumPhotoUrl url_for(song.album.photo)
    end
end  