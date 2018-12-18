import React, {Component} from "react";
import PropTypes from "prop-types";

class LogOut extends Component {
    static propTypes = {
        endpoint: PropTypes.string,
    };

    onClick(event) {
        document.cookie.split(";").forEach(function (c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        const conf = {
            headers: new Headers({"Cache-Control": "no-cache, no-store, must-revalidate"})
        };

        fetch("http://127.0.0.1:8000/logout/",conf).then(() => window.location.replace("http://127.0.0.1:8000/"));
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