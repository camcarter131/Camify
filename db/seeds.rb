# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create(username: 'harden13', password: 'password', displayed_name: 'James Harden', email: 'the_beard@rockets.com')

#
#_________________________________ARTISTS_________________________________
#

Artist.create(name: 'Stevie Ray Vaughan', description: 'Guitarist from Texas')
Artist.create(name: 'Lil Wayne', description: 'Rapper from New Orleans')
Artist.create(name: 'Travis Scott', description: 'Rapper from Houston')

#
#_________________________________ALBUMS_________________________________
#

Album.create(name: "Texas Flood", artist_id: Artist.find_by(name: 'Stevie Ray Vaughan').id, release_year: 1983)
Album.create(name: "Soul to Soul", artist_id: Artist.find_by(name: 'Stevie Ray Vaughan').id, release_year: 1985)
Album.create(name: "Tha Carter III ", artist_id: Artist.find_by(name: 'Lil Wayne').id, release_year: 2008)
Album.create(name: "Tha Carter V", artist_id: Artist.find_by(name: 'Lil Wayne').id, release_year: 2018)
Album.create(name: "Astroworld", artist_id: Artist.find_by(name: 'Travis Scott').id, release_year: 2018)

#
#_________________________________SONGS_________________________________
#
