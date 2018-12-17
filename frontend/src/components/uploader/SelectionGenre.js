import React from 'react';
import Select from 'react-select';
import PropTypes from "prop-types";


function get_options(options) {
    let answer = [];
    for (let iter = 0; iter < options.length; iter++) {
        answer.push({value: options[iter]["name"], label: options[iter]["name"]});
    }
    return answer;
}

class SelectionGenre extends React.Component {
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
        this.props.handleChange({target: {name: "SelectGenre", value: selectedOption.value}});
        console.log(`Option selected:`, selectedOption);
    };

    render() {
        const {selectedOption} = this.state;

        return (
            <Select
                required
                value={selectedOption}
                onChange={this.handleChange}
                options={get_options(this.props.options)}
                name="SelectGenre"
            />
        );
    }
}

export default SelectionGenre;