import React, {Component} from "react";
import PropTypes from "prop-types";

class Auth extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };
    state = {
        username: "",
        password: ""
    };
    handleChange(event) {
        if(event.target.name === "username")
        {
            this.setState({
                username: event.target.value
            });
        }
        else if(event.target.name === "password")
        {
            this.setState({
                password: event.target.value
            });
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
        fetch("/api/user/"+this.state.username+"/login/", conf).then(response => console.log(response));
    };

    render() {
        const {username, password} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
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