import PropTypes from "prop-types";
import React from "react";

class CompositionList extends React.Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired,
        render: PropTypes.func.isRequired
    };
    state = {
        data: [],
        loaded: false,
        placeholder: "Loading..."
    };

    componentDidMount() {
        fetch(this.props.endpoint)
            .then(response => {
                if (response.status !== 200) {
                    return this.setState({placeholder: "Something went wrong"});
                }
                return response.json();
            })
            .then(data => this.setState({data: data, loaded: true}));
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}