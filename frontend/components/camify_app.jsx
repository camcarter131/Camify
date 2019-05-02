import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Splash from './splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

 
const App = () => (
    <div className="app-div">
        <Switch>
            <AuthRoute id="login-signup" exact path="/login" component={LogInFormContainer} />
            <AuthRoute id="login-signup" exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={Splash} />
        </Switch>
    </div>
);

export default App;
