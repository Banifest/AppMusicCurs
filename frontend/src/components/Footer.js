import React, {Component} from "react";
import PropTypes from "prop-types";

class Footer extends Component {
    static propTypes = {
        endpoint: PropTypes.string,
    };
    state = {
        endpoint: "http://127.0.0.1:8000/"
    };

    onClick(event) {
        window.location.replace(event.target.value);
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default Footer;