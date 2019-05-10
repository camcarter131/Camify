# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first) 

User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all
Playlist.destroy_all


User.create(username: 'harden13', password: 'password', displayed_name: 'James Harden', email: 'the_beard@rockets.com')

harden = User.find_by(username: 'harden13')

harden.photo.attach(io: File.open("app/assets/images/harden.jpg"), filename:"harden.jpg")

##########################################################################
#_________________________________ARTISTS________________________________#
#                                                                        #   
##########################################################################

Artist.create(name: 'Stevie Ray Vaughan', description: 'Guitarist from Texas')
Artist.create(name: 'Lil Wayne', description: 'Rapper from New Orleans')
Artist.create(name: 'Jimi Hendrix', description: 'Guitarist from Seattle')

srv = Artist.find_by(name: 'Stevie Ray Vaughan')
lw = Artist.find_by(name: 'Lil Wayne')
jimi = Artist.find_by(name: 'Jimi Hendrix')

srv.photo.attach(io: File.open("app/assets/images/artist_photos/srv_artist_photo2.jpg"), filename:"srv_artist_photo2.jpg")
srv.index_photo.attach(io: File.open("app/assets/images/artist_photos/srv_artist_photo.jpg"), filename:"srv_artist_photo.jpg")

lw.photo.attach(io: File.open("app/assets/images/artist_photos/lil_wayne_artist_photo.jpeg"), filename:"lil_wayne_artist_photo.jpeg")
lw.index_photo.attach(io: File.open("app/assets/images/artist_photos/lw.jpg"), filename:"lw.jpg")

jimi.photo.attach(io: File.open("app/assets/images/artist_photos/jimi.jpg"), filename:"jimi.jpg")
jimi.index_photo.attach(io: File.open("app/assets/images/artist_photos/jimi_index.jpg"), filename:"jimi_index.jpg")


##########################################################################
#__________________________________AlBUMS________________________________#
#                                                                        #   
##########################################################################

Album.create(name: "Texas Flood", artist_id: Artist.find_by(name: 'Stevie Ray Vaughan').id, release_year: 1983)
Album.create(name: "Soul to Soul", artist_id: Artist.find_by(name: 'Stevie Ray Vaughan').id, release_year: 1985)
Album.create(name: "Tha Carter III", artist_id: Artist.find_by(name: 'Lil Wayne').id, release_year: 2008)
Album.create(name: "Electric Ladyland", artist_id: Artist.find_by(name: 'Jimi Hendrix').id, release_year: 1968)

tf = Album.find_by(name: 'Texas Flood')
ss = Album.find_by(name: 'Soul to Soul')
tc = Album.find_by(name: 'Tha Carter III')
el = Album.find_by(name: 'Electric Ladyland')

tf.photo.attach(io: File.open("app/assets/images/album_photos/tf.jpeg"), filename:"tf.jpeg")
ss.photo.attach(io: File.open("app/assets/images/album_photos/ss.jpg"), filename:"ss.jpg")
tc.photo.attach(io: File.open("app/assets/images/album_photos/tc.jpg"), filename:"tc.jpg")
el.photo.attach(io: File.open("app/assets/images/album_photos/el.jpg"), filename:"el.jpg")

##########################################################################
#___________________________________SONGS________________________________#
#                                                                        #   
##########################################################################

## - Texas Flood - ##
Song.create(name: 'Texas Flood', album_id: Album.find_by(name: 'Texas Flood').id, duration: 321)
Song.create(name: 'Pride and Joy', album_id: Album.find_by(name: 'Texas Flood').id, duration: 220)
Song.create(name: 'Testify', album_id: Album.find_by(name: 'Texas Flood').id, duration: 205)
Song.create(name: 'Rude Mood', album_id: Album.find_by(name: 'Texas Flood').id, duration: 280)

TF = Song.find_by(name: 'Texas Flood')
PJ = Song.find_by(name: 'Pride and Joy')
T = Song.find_by(name: 'Testify')
RM = Song.find_by(name: 'Rude Mood')

TF.song_file.attach(io: File.open("app/assets/images/songs/texas_flood.mp3"), filename:"texas_flood.mp3")
PJ.song_file.attach(io: File.open("app/assets/images/songs/PJ.mp3"), filename:"PJ.mp3")
T.song_file.attach(io: File.open("app/assets/images/songs/T.mp3"), filename:"T.mp3")
RM.song_file.attach(io: File.open("app/assets/images/songs/RM.mp3"), filename:"RM.mp3")

## - Soul to Soul - ##
Song.create(name: 'Say What!', album_id: Album.find_by(name: 'Soul to Soul').id, duration: 323)
Song.create(name: "Ain't Gone 'n' Give Up on Love", album_id: Album.find_by(name: 'Soul to Soul').id, duration: 367)
Song.create(name: 'Change It', album_id: Album.find_by(name: 'Soul to Soul').id, duration: 280)
Song.create(name: 'Life Without You', album_id: Album.find_by(name: 'Soul to Soul').id, duration: 298)

SW = Song.find_by(name: 'Say What!')
AGGL = Song.find_by(name: "Ain't Gone 'n' Give Up on Love")
CI = Song.find_by(name: 'Change It')
LWY = Song.find_by(name: 'Life Without You')

SW.song_file.attach(io: File.open("app/assets/images/songs/SW.mp3"), filename:"SW.mp3")
AGGL.song_file.attach(io: File.open("app/assets/images/songs/AGGL.mp3"), filename:"AGGL.mp3")
CI.song_file.attach(io: File.open("app/assets/images/songs/CI.mp3"), filename:"CI.mp3")
LWY.song_file.attach(io: File.open("app/assets/images/songs/LWY.mp3"), filename:"LWY.mp3")

## - Tha Carter III - ##
Song.create(name: '3 Peat', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 144)
Song.create(name: 'Mr. Carter', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 220)
Song.create(name: 'A Milli', album_id: Album.find_by(name: 'Tha Carter III').id, duration: 321)
Song.create(name: "Mrs. Officer", album_id: Album.find_by(name: 'Tha Carter III').id, duration: 222)

ThreeP = Song.find_by(name: '3 Peat')
MC = Song.find_by(name: "Mr. Carter")
AM = Song.find_by(name: 'A Milli')
MO = Song.find_by(name: 'Mrs. Officer')

ThreeP.song_file.attach(io: File.open("app/assets/images/songs/ThreeP.mp3"), filename:"ThreeP.mp3")
MC.song_file.attach(io: File.open("app/assets/images/songs/MC.mp3"), filename:"MC.mp3")
AM.song_file.attach(io: File.open("app/assets/images/songs/AM.mp3"), filename:"AM.mp3")
MO.song_file.attach(io: File.open("app/assets/images/songs/MO.mp3"), filename:"MO.mp3")

## - Electric Ladyland - ##
Song.create(name: 'Voodoo Child (Slight Return)', album_id: Album.find_by(name: 'Electric Ladyland').id, duration: 244)
Song.create(name: 'All Along the Watchtower', album_id: Album.find_by(name: 'Electric Ladyland').id, duration: 220)
Song.create(name: 'Little Wing', album_id: Album.find_by(name: 'Electric Ladyland').id, duration: 321)
Song.create(name: "Red House", album_id: Album.find_by(name: 'Electric Ladyland').id, duration: 222)

VC = Song.find_by(name: 'Voodoo Child (Slight Return)')
AAW = Song.find_by(name: "All Along the Watchtower")
LittleWing = Song.find_by(name: 'Little Wing')
RH = Song.find_by(name: 'Red House')

VC.song_file.attach(io: File.open("app/assets/images/songs/VC.mp3"), filename:"VC.mp3")
AAW.song_file.attach(io: File.open("app/assets/images/songs/AAW.mp3"), filename:"AAW.mp3")
LittleWing.song_file.attach(io: File.open("app/assets/images/songs/LittleWing.mp3"), filename:"LittleWing.mp3")
RH.song_file.attach(io: File.open("app/assets/images/songs/RH.mp3"), filename:"RH.mp3")



