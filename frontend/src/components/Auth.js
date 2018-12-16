import React, {Component} from "react";
import PropTypes from "prop-types";
import CSRFToken from "./CRFSToken";

class Auth extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };
    state = {
        username: "",
        password: ""
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
        }
    };

    handleSubmit = event => {
        event.preventDefault();
        const {username, password} = this.state;
        const lead = {username, password};
        const conf = {
            method: "post",
            body: JSON.stringify(lead),
            headers: new Headers({"Content-Type": "application/json"})
        };
        fetch("/api/user/" + this.state.username + "/login/", conf).then(response => console.log(response));
    };

    render() {
        const {username, password, csrfmiddlewaretoken} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <CSRFToken/>
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
                <div className="control">
                    <button type="submit" className="button is-info">
                        Auth
                    </button>
                </div>
            </form>
        );
    }
}

export default Auth;