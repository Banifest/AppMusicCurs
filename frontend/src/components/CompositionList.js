import PropTypes from "prop-types";
import React from "react";

class CompositionList extends React.Component{
    static propTypes = {
        endpoint: PropTypes.string.isRequired,
        render: PropTypes.func.isRequired
    };
    state = {
        data: [],
        loaded: false,
        placeholder: "Loading..."
    };

    render()
    {
        return (
            <div>

            </div>
        );
    }
}