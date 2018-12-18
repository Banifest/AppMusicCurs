import PropTypes from "prop-types";
import React from "react";

class ErrorDisplay extends React.Component {
    static propTypes = {
        message: PropTypes.string,
    };

    render() {
        return (
            <div>
                <label color="red">
                    {this.props.message}
                </label>
            </div>
        );
    }
}

export default ErrorDisplay;