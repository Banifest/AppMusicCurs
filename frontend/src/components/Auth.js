import React, {Component} from "react";
import PropTypes from "prop-types";
import ErrorDisplay from "./ErrorDisplay";

class Auth extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };
    state = {
        username: "",
        password: "",
        error: ""
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
        fetch("/api/user/" + this.state.username + "/login/", conf).then((response) => {
            console.log(response);
            if (response.status === 201) {
                window.location.replace("/composition/");
            } else {
                return response.json()
            }
        }).then(
            (data) => {
                console.log(data);
                this.setState({
                    error:  data["detail"]
                });
            }
        );
    };

    componentWillMount() {
        fetch(this.props.endpoint)
            .then(response => {
                if (response.status !== 403 && response.status !== 400) {
                    window.location.replace("http://127.0.0.1:8000/composition/");
                }
                return response.json();
            });
    }

    render() {
        const {username, password} = this.state;
        return (
            <div align="center">
                <form onSubmit={this.handleSubmit}>
                    <h1 align="center"><b>Auth</b></h1>
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
                        <button type="submit" className="button is-info" style={{align: "center"}}>
                            Auth
                        </button>
                    </div>
                </form>
                <ErrorDisplay message={this.state.error}/>
            </div>
        );
    }
}

export default Auth;