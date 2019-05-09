import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Errors from '../errors';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) { 
        super(props);
        this.state = { 
            username: "",
            password: "",
            displayed_name: "",
            email: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentWillMount() {
        this.props.errors.session = [];
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push("/collection/playlists"));

    }

    demoLogin(e) {
        e.preventDefault();
        let demoUsername = 'harden13';
        let demoPassword = 'password';
        let demoUser = {
            username: demoUsername,
            password: demoPassword
        };
        this.props.processForm(demoUser).then(() => this.props.history.push("/collection/playlists"));
    }


    update(field) {
        return e => (
            this.setState({[field]: e.target.value})
        );
    }

    signup() {
        return (
            <div className="main-form-div">
                <form className="login-signup-form" onSubmit={this.handleSubmit}>
                    <div id="sign-up-msg">
                        Sign up with your email address
                    </div>
                    <div id="input-list">
                        <li className="session-li">
                            <input className="signup" type="text" value={this.state.username}
                                placeholder="Username" onChange={this.update("username")} />
                        </li>
                        <li className="session-li">
                            <input className="signup" type="text" value={this.state.email}
                                placeholder="Email" onChange={this.update("email")} />
                        </li>
                        <li className="session-li">
                            <input className="signup" type="password" value={this.state.password}
                                placeholder="Password" onChange={this.update("password")} />
                        </li>
                        <li className="session-li">
                            <input className="signup" type="text" value={this.state.displayed_name}
                                placeholder="What should we call you?" onChange={this.update("displayed_name")} />
                        </li>
                        <li className="session-li">
                            <input id="login-submit-button" type="submit" value={this.props.formType} />
                        </li>
                        <li className="session-li">
                            <span className="switch-to-login">
                                Already have an account? <Link id="switch-to-login-link" 
                                    to="/login">&nbsp;&nbsp;Log in</Link>
                            </span>
                        </li>
                    </div>
                </form>
            </div>

        );
    }

    login() {
        return (
            <div className="main-form-div">
                <form className="login-signup-form" onSubmit={this.handleSubmit}>
                    <div id='login-msg'>
                        To continue, log in to Camify.
                    </div>
                    <div id="demo-button-div">
                        <button onClick={this.demoLogin} id="demo-button">DEMO LOGIN</button>
                    </div>
                    <div id='or'>
                        {/* <div id="or-text">OR</div> */}
                        <strong className="divider">OR</strong>
                    </div>
                    <div id="input-list">
                        <li className="session-li">
                            <input className="login" type="text" value={this.state.username}
                                placeholder="Username" onChange={this.update("username")} />
                        </li>
                        <li className="session-li">
                            <input className="login" type="password" value={this.state.password}
                                placeholder="Password" onChange={this.update("password")} />
                        </li>
                        <li className="session-li" id="login-li">
                            {/* <button onClick={this.handleSubmit} id="login-submit-button2">{this.props.formType}</button> */}
                            <input id="login-submit-button2" type="submit" value={this.props.formType} />
                        </li>
                    </div>
                    <div id='second-div'>
                        <div className="session-div" id="text-border">
                            <div className="switch-to-signup" id="switch-to-signup-text">
                                Don't have an account?
                            </div>
                        </div>
                        <div className="session-div">
                            <Link id="switch-to-signup-button" to="/signup">SIGN UP FOR CAMIFY</Link>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }

    render() {
        return (
            <div>
                <GreetingContainer />
                <Errors session={this.props.errors.session}/>
                {(this.props.formType === 'SIGN UP')? this.signup() : this.login()}
            </div>
        )
    }
};

export default SessionForm;