import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Splash from './splash';

 
const App = () => (
    <div className="app-div">
        <header className="main-header">
            <h1 className="Camify">Camify</h1>
            <GreetingContainer />
        </header>
        <Route exact path="/login" component={LogInFormContainer} />
        <Route exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/" component={Splash} />
    </div>
);

export default App;
