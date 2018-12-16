import React, {Component} from "react";
import PropTypes from "prop-types";

class CompProvider extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired,
        render: PropTypes.func.isRequired,
        name: PropTypes.string
    };
    state = {
        data: [],
        loaded: false,
        placeholder: "Loading..."
    };

    componentWillMount() {
        fetch(this.props.endpoint)
            .then(response => {
                if (response.status === 403) {
                    window.location.replace("http://127.0.0.1:8000/");
                }
            });
    }

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
        const {data, loaded, placeholder} = this.state;
        return loaded ? this.props.render(data) : <p>{placeholder}</p>;
    }
}

export default CompProvider;