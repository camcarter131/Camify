import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import WebPlayerContainer from './web_player/web_player_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

 
const App = () => (
    <div className="app-div">
        <Switch>
            {/* <ProtectedRoute ></ProtectedRoute> */}
            <AuthRoute id="login-signup" exact path="/login" component={LogInFormContainer} />
            <AuthRoute id="login-signup" exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={WebPlayerContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;