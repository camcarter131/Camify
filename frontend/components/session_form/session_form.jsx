import React from 'react';

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
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => (
            this.setState({[field]: e.target.value})
        );
    }

    render() {

        return (
            <div className="main-form-div">
                <form className="login-signup-form" onSubmit={this.handleSubmit}>
                    <fieldset>
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
                        </ul>
                    </fieldset>
                </form>
            </div>
        )
    }
};

export default SessionForm;