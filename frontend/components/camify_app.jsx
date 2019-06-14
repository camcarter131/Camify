import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Splash from './splash';
import Home from './home/home';
import LibraryContainer from './library/library_container';
import SideNavContainer from './side_nav/side_nav_container';
import PlayBarContainer from './playbar/playbar_container';
import PlaylistShowContainer from './library/playlists/playlist_show_container';
import ArtistShowContainer from './library/artists/artist_show_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SearchContainer from './search/search_container';

 
const App = () => (
    <div className="app-div">
 
        <SideNavContainer />
        <Switch>
            {/* <ProtectedRoute ></ProtectedRoute> */}
            <AuthRoute id="login-signup" exact path="/login" component={LogInFormContainer} />
            <AuthRoute id="login-signup" exact path="/signup" component={SignUpFormContainer} />

            <ProtectedRoute exact path="/browse/featured" component={Home} />
            <ProtectedRoute exact path="/collection/:type" component={LibraryContainer} />            
            <ProtectedRoute exact path="/search" component={SearchContainer} /> 
            <ProtectedRoute exact path="/playlists/:id" component={PlaylistShowContainer} />
            <ProtectedRoute exact path="/artists/:id" component={ArtistShowContainer} />

            <AuthRoute exact path="/" component={Splash} />

            {/* <ProtectedRoute exact path="/collection/playlists" component={WebPlayerContainer} /> */}
            <Redirect to="/" />
        </Switch>
        <PlayBarContainer />
    </div>
);

export default App;
