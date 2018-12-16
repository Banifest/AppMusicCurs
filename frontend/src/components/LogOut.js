import React, {Component} from "react";
import PropTypes from "prop-types";

class LogOut extends Component {
    static propTypes = {
        endpoint: PropTypes.string,
    };
    state = {
        endpoint: "http://127.0.0.1:8000/"
    };

    onClick(event)
    {
        window.location.replace(event.target.value);
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick.bind(this)}>LogOut</button>
            </div>
        );
    }
}

export default LogOut;