import React, {Component} from "react";
import PropTypes from "prop-types";

class Form extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };
    state = {
        username: "",
        email: "",
        first_name: ""
    };
    handleChange = e => {
        this.setState({[e.target.username]: e.target.value});
    };
    handleSubmit = e => {
        e.preventDefault();
        const {username, email, first_name} = this.state;
        const lead = {username, email, first_name};
        const conf = {
            method: "post",
            body: JSON.stringify(lead),
            headers: new Headers({"Content-Type": "application/json"})
        };
        fetch(this.props.endpoint, conf).then(response => console.log(response));
    };

    render() {
        const {username, email, first_name} = this.state;
        return (
            <div className="column">
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="username"
                                onChange={this.handleChange}
                                value={username}
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                className="input"
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                                value={email}
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="first_name"
                                onChange={this.handleChange}
                                value={first_name}
                                required
                            />
                        </div>
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-info">
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;