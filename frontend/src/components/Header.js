import React, {Component} from "react";
import PropTypes from "prop-types";

class Header extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <a ref="127.0.0.1:8000/">Main</a>
                <a ref="127.0.0.1:8000/composition">Composition</a>
            </div>
        );
    }
}

export default Header;