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
            <div align="center">
                <button
                    onClick={this.onClick.bind(this)}
                    value={this.state.endpoint}
                    className="button is-info"
                >
                    Main
                </button>
                <br/>
                {this.props.headerType === 2 && <button
                    onClick={this.onClick.bind(this)}
                    value={this.state.endpoint + "composition/"}
                    className="button is-error"
                >
                    Composition
                </button>}
                {this.props.headerType === 1 && <br/>}
                {this.props.headerType === 1 && <button
                    onClick={this.onClick.bind(this)}
                    value={this.state.endpoint + "registration/"}
                    className="button is-error"
                    hidden="true"
                >
                    Registration
                </button>}
                {this.props.headerType === 2 && <br/>}
                {this.props.headerType === 2 && <LogOut/>}
                {this.props.headerType === 2 && <br/>}
                {this.props.headerType === 2 && <button
                    onClick={this.onClick.bind(this)}
                    value={this.state.endpoint + "upload/"}
                    className="button is-error"
                    hidden="true"
                >
                    Upload
                </button>}
                <br/>
            </div>
        );
    }
}

export default Header;