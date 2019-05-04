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
        this.props.processForm(user);

    }

    demoLogin(e) {
        e.preventDefault();
        let demoUsername = 'harden13';
        let demoPassword = 'password';
        let demoUser = {
            username: demoUsername,
            password: demoPassword
        };
        this.props.processForm(demoUser);
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
                        <li>
                            <input className="signup" type="text" value={this.state.username}
                                placeholder="Username" onChange={this.update("username")} />
                        </li>
                        <li>
                            <input className="signup" type="text" value={this.state.email}
                                placeholder="Email" onChange={this.update("email")} />
                        </li>
                        <li>
                            <input className="signup" type="password" value={this.state.password}
                                placeholder="Password" onChange={this.update("password")} />
                        </li>
                        <li>
                            <input className="signup" type="text" value={this.state.displayed_name}
                                placeholder="What should we call you?" onChange={this.update("displayed_name")} />
                        </li>
                        <li>
                            <input id="login-submit-button" type="submit" value={this.props.formType} />
                        </li>
                        <li>
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
                        OR
                    </div>
                    <div id="input-list">
                        <li>
                            <input className="login" type="text" value={this.state.username}
                                placeholder="Username" onChange={this.update("username")} />
                        </li>
                        <li>
                            <input className="login" type="password" value={this.state.password}
                                placeholder="Password" onChange={this.update("password")} />
                        </li>
                        <li>
                            <input id="login-submit-button2" type="submit" value={this.props.formType} />
                        </li>
                        <li className="text-border">
                            <span className="switch-to-signup" id="switch-to-signup-text">
                                Don't have an account?
                            </span>
                        </li>
                        <li>
                            <Link id="switch-to-signup-button" to="/signup">SIGN UP FOR CAMIFY</Link>
                        </li>

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