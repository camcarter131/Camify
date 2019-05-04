# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create(username: 'harden13', password: 'password', displayed_name: 'James Harden', email: 'the_beard@rockets.com')

##########################################################################
#_________________________________ARTISTS________________________________#
#                                                                        #   
##########################################################################

Artist.create(name: 'Stevie Ray Vaughan', description: 'Guitarist from Texas')
Artist.create(name: 'Lil Wayne', description: 'Rapper from New Orleans')

##########################################################################
#__________________________________AlBUMS________________________________#
#                                                                        #   
##########################################################################

Album.create(name: "Texas Flood", artist_id: Artist.find_by(name: 'Stevie Ray Vaughan').id, release_year: 1983)
Album.create(name: "Soul to Soul", artist_id: Artist.find_by(name: 'Stevie Ray Vaughan').id, release_year: 1985)
Album.create(name: "Tha Carter III", artist_id: Artist.find_by(name: 'Lil Wayne').id, release_year: 2008)
Album.create(name: "Rebirth", artist_id: Artist.find_by(name: 'Lil Wayne').id, release_year: 2010)

##########################################################################
#___________________________________SONGS________________________________#
#                                                                        #   
##########################################################################

## - Texas Flood - ##
Song.create(name: 'Love Struck Baby', album_id: Album.find_by(name: 'Texas Flood').id, duration: 144)
Song.create(name: 'Pride and Joy', album_id: Album.find_by(name: 'Texas Flood').id, duration: 220)
Song.create(name: 'Texas Flood', album_id: Album.find_by(name: 'Texas Flood').id, duration: 321)
Song.create(name: 'Tell Me', album_id: Album.find_by(name: 'Texas Flood').id, duration: 169)
Song.create(name: 'Testify', album_id: Album.find_by(name: 'Texas Flood').id, duration: 205)
Song.create(name: 'Rude Mood', album_id: Album.find_by(name: 'Texas Flood').id, duration: 280)
Song.create(name: 'Mary Had a Little Lamb', album_id: Album.find_by(name: 'Texas Flood').id, duration: 167)
Song.create(name: 'Dirty Pool', album_id: Album.find_by(name: 'Texas Flood').id, duration: 302)
Song.create(name: "I'm Cryin", album_id: Album.find_by(name: 'Texas Flood').id, duration: 222)
Song.create(name: 'Lenny', album_id: Album.find_by(name: 'Texas Flood').id, duration: 298)

## - Soul to Soul - ##
Song.create(name: 'Say What!', album_id: Album.find_by(name: 'Soul to Soul').id, duration: 323)
Song.create(name: "Lookin' Out the Window", album_id: Album.find_by(name: 'Soul to Soul').id, duration: 168)
Song.create(name: 'Look at Little Sister', album_id: Album.find_by(name: 'Soul to Soul').id, duration: 188)
Song.create(name: "Ain't Gone 'n' Give Up on Love", album_id: Album.find_by(name: 'Soul to Soul').id, duration: 367)
Song.create(name: 'Gone Home', album_id: Album.find_by(name: 'Soul to Soul').id, duration: 205)
Song.create(name: 'Change It', album_id: Album.find_by(name: 'Soul to Soul').id, duration: 280)
Song.create(name: "You'll Be Mine", album_id: Album.find_by(name: 'Soul to Soul').id, duration: 167)
Song.create(name: 'Empty Arms', album_id: Album.find_by(name: 'Soul to Soul').id, duration: 302)
Song.create(name: "Come On (Part III)", album_id: Album.find_by(name: 'Soul to Soul').id, duration: 222)
Song.create(name: 'Life Without You', album_id: Album.find_by(name: 'Soul to Soul').id, duration: 298)

## - Tha Carter III - ##
Song.create(name: '3 Peat', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 144)
Song.create(name: 'Mr. Carter', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 220)
Song.create(name: 'A Milli', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 321)
Song.create(name: 'Got Money', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 169)
Song.create(name: 'Comfortable', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 205)
Song.create(name: 'Dr. Carter', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 280)
Song.create(name: 'Phone Home', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 167)
Song.create(name: 'Tie My Hands', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 302)
Song.create(name: "Mrs. Officer", album_id: Album.find_by(name: 'Tha Carter III').id, duration: 222)
Song.create(name: 'Let the Beat Build', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 298)
Song.create(name: 'Shoot Me Down', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 205)
Song.create(name: 'Lollipop', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 280)
Song.create(name: 'La La', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 167)
Song.create(name: 'Playing With Fire', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 302)
Song.create(name: "You Ain't Got Nuthin", album_id: Album.find_by(name: 'Tha Carter III').id, duration: 222)
Song.create(name: 'Dontgetit', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 298)

## - Rebirth - ##
Song.create(name: 'American Star', album_id: Album.find_by(name: 'Rebirth').id, duration: 323)
Song.create(name: "Prom Queen", album_id: Album.find_by(name: 'Rebirth').id, duration: 168)
Song.create(name: 'Ground Zero', album_id: Album.find_by(name: 'Rebirth').id, duration: 188)
Song.create(name: "Da Da Da", album_id: Album.find_by(name: 'Rebirth').id, duration: 367)
Song.create(name: 'Paradice', album_id: Album.find_by(name: 'Rebirth').id, duration: 205)
Song.create(name: 'Get a Life', album_id: Album.find_by(name: 'Rebirth').id, duration: 280)
Song.create(name: "On Fire", album_id: Album.find_by(name: 'Rebirth').id, duration: 167)
Song.create(name: 'Drop the World', album_id: Album.find_by(name: 'Rebirth').id, duration: 302)
Song.create(name: "Runnin", album_id: Album.find_by(name: 'Rebirth').id, duration: 222)
Song.create(name: 'One Way Trip', album_id: Album.find_by(name: 'Rebirth').id, duration: 298)
Song.create(name: "Knockout", album_id: Album.find_by(name: 'Rebirth').id, duration: 222)
Song.create(name: 'The Price is Wrong', album_id: Album.find_by(name: 'Rebirth').id, duration: 298)