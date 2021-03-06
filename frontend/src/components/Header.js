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
    buttonStyle = {width: "120px"};

    render() {
        return (
            <div align="center" style={{backgroundColor: '#1676c2'}}>
                <button
                    onClick={this.onClick.bind(this)}
                    value={this.state.endpoint}
                    className="button is-info"
                    style={this.buttonStyle}
                >
                    Main
                </button>
                {this.props.headerType === 2 && <br/>}
                {this.props.headerType === 2 && <button
                    onClick={this.onClick.bind(this)}
                    value={this.state.endpoint + "composition/"}
                    className="button is-error"
                    style={this.buttonStyle}
                >
                    Composition
                </button>}
                {this.props.headerType === 1 && <br/>}
                {this.props.headerType === 1 && <button
                    onClick={this.onClick.bind(this)}
                    value={this.state.endpoint + "registration/"}
                    className="button is-error"
                    hidden="true"
                    style={this.buttonStyle}
                >
                    Registration
                </button>}
                {this.props.headerType === 2 && <br/>}
                {this.props.headerType === 2 && <LogOut/>}
                {this.props.headerType === 2 && <button
                    onClick={this.onClick.bind(this)}
                    value={this.state.endpoint + "upload/"}
                    className="button is-error"
                    hidden="true"
                    style={this.buttonStyle}
                >
                    Upload
                </button>}
                <br/>
            </div>
        );
    }
}

export default Header;