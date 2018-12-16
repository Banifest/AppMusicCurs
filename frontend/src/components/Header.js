import React, {Component} from "react";
import PropTypes from "prop-types";
import LogOut from "./LogOut";

class Header extends Component {
    static propTypes = {
        endpoint: PropTypes.string,
        headerType: PropTypes.number.isRequired,
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
                <button
                    onClick={this.onClick.bind(this)}
                    value={this.state.endpoint}
                    className="button is-info"
                >
                    Main
                </button>
                <button
                    onClick={this.onClick.bind(this)}
                    value={this.state.endpoint + "composition/"}
                    className="button is-error"
                >
                    Composition
                </button>
                {this.props.headerType === 1 && <button
                    onClick={this.onClick.bind(this)}
                    value={this.state.endpoint + "registration/"}
                    className="button is-error"
                    hidden="true"
                >
                    Registration
                </button>}
                {this.props.headerType === 2 && <LogOut/>}
            </div>
        );
    }
}

export default Header;