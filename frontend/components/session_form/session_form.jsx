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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-div">
                        <label>Username:
                            <input type="text" value={this.state.username} onChange={this.update("username")}/>
                        </label>
                    </div>
                    <div className="form-div">
                        <label> Email:
                            <input type="text" value={this.state.email} onChange={this.update("email")}/>
                        </label>
                    </div>
                    <div className="form-div">
                        <label> Password:
                            <input type="password" value={this.state.password} onChange={this.update("password")}/>
                        </label>
                    </div>
                    <div className="form-div">
                        <label> What should we call you?
                            <input type="text" value={this.state.displayed_name} onChange={this.update("displayed_name")}/>
                        </label>
                    </div>
                    <div className="form-div">
                        <input type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
};

export default SessionForm;