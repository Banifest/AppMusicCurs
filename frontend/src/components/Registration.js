import React, {Component} from "react";
import PropTypes from "prop-types";
import ErrorDisplay from "./ErrorDisplay";

class Registration extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };
    state = {
        error: "",
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: ""
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

    handleSubmit = event => {
        event.preventDefault();
        const {username, password, email, first_name, last_name} = this.state;
        const lead = {username, password, email, first_name, last_name};
        const conf = {
            method: "post",
            body: JSON.stringify(lead),
            headers: new Headers({"Content-Type": "application/json"})
        };
        fetch(this.props.endpoint, conf).then((response) => {
            console.log(response);
            if (!response.status.toString().startsWith("2")) {
                return response.json()
            }
            else
            {
                window.location.replace("http://127.0.0.1:8000/");
            }
        }).then(
            (data) => {
                console.log(data);
                if (data["username"]) {
                    this.setState({
                        error: data["username"][0]
                    });
                } else if(data["password"])
                {
                    this.setState({
                        error: data["password"][0]
                    });
                } else if(data["email"])
                {
                    this.setState({
                        error: data["email"][0]
                    });
                }

            })
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
                <ErrorDisplay message={this.state.error}/>
            </form>
        );
    }
}

export default Registration;