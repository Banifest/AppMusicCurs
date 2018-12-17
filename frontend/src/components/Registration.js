import React, {Component} from "react";
import PropTypes from "prop-types";

class Registration extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };
    state = {
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: ""
    };
    handleSubmit = event => {
        event.preventDefault();
        const {username, password, email, first_name, last_name} = this.state;
        const lead = {username, password, email, first_name, last_name};
        const conf = {
            method: "post",
            body: JSON.stringify(lead),
            headers: new Headers({"Content-Type": "application/json"})
        };
        fetch(this.props.endpoint, conf).then(response => console.log(response));
    };

    handleChange(event) {
        switch (event.target.name) {
            case  "username":
                this.setState({
                    username: event.target.value
                });
                break;
            case "password":
                this.setState({
                    password: event.target.value
                });
                break;
            case "email":
                this.setState({
                    email: event.target.value
                });
                break;
            case "first_name":
                this.setState({
                    first_name: event.target.value
                });
                break;
            case "last_name":
                this.setState({
                    last_name: event.target.value
                });
                break;
        }
    };

    render() {
        const {username, password, email, first_name, last_name} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h1 align="center"><b>Registration</b></h1>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="username"
                            onChange={this.handleChange.bind(this)}
                            value={username}
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            name="password"
                            onChange={this.handleChange.bind(this)}
                            value={password}
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">E-mail</label>
                    <div className="control">
                        <input
                            className="input"
                            type="email"
                            name="email"
                            onChange={this.handleChange.bind(this)}
                            value={email}
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">First name</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="first_name"
                            onChange={this.handleChange.bind(this)}
                            value={first_name}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Last name</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="last_name"
                            onChange={this.handleChange.bind(this)}
                            value={last_name}
                        />
                    </div>
                </div>
                <div className="control">
                    <button type="submit" className="button is-info">
                        Register
                    </button>
                </div>
            </form>
        );
    }
}

export default Registration;