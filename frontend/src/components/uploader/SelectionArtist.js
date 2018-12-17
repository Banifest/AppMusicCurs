import React from 'react';
import Select from 'react-select';
import PropTypes from "prop-types";

function get_options_artist(options) {
    let answer = [];
    for (let iter = 0; iter < options.length; iter++) {
        answer.push({
            value: options[iter]["url"].substr("http://127.0.0.1:8000/api/artist/".length).slice(0, -1),
            label: options[iter]["name"]
        });
    }
    return answer;
}
class SelectionArtist extends React.Component {
     static propsTypes = {
        options: PropTypes.array,
    };

    constructor(props) {
        super(props);
        this.state.options = [];

    }

    state = {
        selectedOption: null,
        options: []
    };
    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        this.props.handleChange({target: {name: "SelectArtist", value: selectedOption.value}});
        console.log(`Option selected:`, selectedOption);
    };

    render() {
        const {selectedOption} = this.state;

        return (
            <Select
                required
                value={selectedOption}
                onChange={this.handleChange}
                options={get_options_artist(this.props.options)}
                name="SelectArtist"
            />
        );
    }
}

export default SelectionArtist;