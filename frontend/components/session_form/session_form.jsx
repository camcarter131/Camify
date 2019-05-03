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
                    <ul>
                        <li>
                            <input type="text" value={this.state.username}
                                placeholder="Username" onChange={this.update("username")} />
                        </li>
                        <li>
                            <input type="text" value={this.state.email}
                                placeholder="Email" onChange={this.update("email")} />
                        </li>
                        <li>
                            <input type="password" value={this.state.password}
                                placeholder="Password" onChange={this.update("password")} />
                        </li>
                        <li>
                            <input type="text" value={this.state.displayed_name}
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
                    </ul>
                </form>
            </div>

        );
    }

    login() {
        return (
            <div className="main-form-div">
                <form className="login-signup-form" onSubmit={this.handleSubmit}>
                    <ul>
                        <li>
                            <input type="text" value={this.state.username}
                                placeholder="Username" onChange={this.update("username")} />
                        </li>
                        <li>
                            <input type="password" value={this.state.password}
                                placeholder="Password" onChange={this.update("password")} />
                        </li>
                        <li>
                            <input id="login-submit-button" type="submit" value={this.props.formType} />
                        </li>
                        <li>
                            <span className="switch-to-signup" id="switch-to-signup-text">
                                Don't have an account?
                            </span>
                        </li>
                        <li>
                            {/* <span className="switch-to-signup" id="switch-to-signup-button">
                                <Link to="/signup"></Link>
                            </span> */}
                            {/* <button onClick={<Link to="/signup"></Link>} id="switch-to-signup-button">SIGN UP FOR SPOTIFY</button> */}
                            <Link id="switch-to-signup-button" to="/signup">SIGN UP FOR CAMIFY</Link>
                        </li>
                        <li>
                            <button onClick={this.demoLogin} id="demo-button">DEMO</button>
                        </li>

                    </ul>
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