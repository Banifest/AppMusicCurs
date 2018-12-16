import React, {Component} from "react";
import PropTypes from "prop-types";

class LogOut extends Component {
    static propTypes = {
        endpoint: PropTypes.string,
    };
    state = {
        endpoint: "http://127.0.0.1:8000/logout/"
    };

    onClick(event) {
        document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
        window.location.replace(this.state.endpoint);
    }

    render() {
        return (
            <div>
                <button
                    className="button is-info"
                    onClick={this.onClick.bind(this)}
                >
                    LogOut
                </button>
            </div>
        );
    }
}

export default LogOut;