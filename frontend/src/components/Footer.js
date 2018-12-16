import React, {Component} from "react";
import PropTypes from "prop-types";
import LogOut from "./LogOut";

class Footer extends Component {
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
                <button onClick={this.onClick.bind(this)} value={this.state.endpoint}>Main</button>
                <button onClick={this.onClick.bind(this)} value={this.state.endpoint + "composition/"}>Composition</button>
                <button onClick={this.onClick.bind(this)} value={this.state.endpoint + "search/"}>Composition</button>
                <LogOut/>
            </div>
        );
    }
}

export default Footer;