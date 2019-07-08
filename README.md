# README

Camify is a full-stack Spotify clone built using Ruby on Rails, React.js, Redux, PostgreSQL, HTML5 & Sass with media hosted on AWS S3.

VIEW LIVE: https://camify-13.herokuapp.com/#/

![](./app/assets/images/Camify_splash.png)

## Features
* Continuous play while navigating through the site
* Search bar
* Playlist CRUD
* User login and sign up

#### Navigate seamlessly while playing music 

![](./app/assets/images/CamifyTravisScott.png)

#### Search

Upon navigating to the search component, the application loads all songs, artists, albums, and playlists
to the Redux state. From there, there is an onChange event handler tied to the search bar, with seperate rendering logic for each type of search result.

```
    handleChange (e) {
        const { songs, artists, albums, playlists } = this.props;
        let searchTerm = e.currentTarget.value;
        let foundSongs = [];
        let foundArtists = [];
        let foundAlbums = [];
        let foundPlaylists = [];
        
        songs.forEach(song => {
            if (song.name.toLowerCase().startsWith(searchTerm.toLowerCase())) foundSongs.push(song);
        });
        artists.forEach(artist => {
            if (artist.name.toLowerCase().startsWith(searchTerm.toLowerCase())) foundArtists.push(artist);
        });
        albums.forEach(album => {
            if (album.name.toLowerCase().startsWith(searchTerm.toLowerCase())) foundAlbums.push(album);
        });
        playlists.forEach(playlist => {
            if (playlist.name.toLowerCase().startsWith(searchTerm.toLowerCase())) foundPlaylists.push(playlist);
        })

        let setNothingSearched = false;
        if (searchTerm === "") setNothingSearched = true;
        this.setState({
            nothingSearched: setNothingSearched,
            foundSongs,
            foundArtists,
            foundAlbums,
            foundPlaylists,
        })
        
    }
```

The results are displayed identically to the resource index pages by taking advantage React components' reusability.

![](./app/assets/images/CamifySearch.png)

#### Create, delete, and add songs to playlists

![](./app/assets/images/CamifyPlaylist.png)

#### User authentication



