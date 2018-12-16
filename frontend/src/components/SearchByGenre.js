import React, {Component} from "react";
import PropTypes from "prop-types";

class SearchByGenre extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    handleSubmit = e => {
        e.preventDefault();
        const {name} = this.state;
        const lead = {name};
        const conf = {
            method: "get",
        };
        fetch("http://127.0.0.1:8000/api/Genre/composition_name/?search_by_genre=" + this.state.name, conf)
            .then(response => console.log(response));
    };

    render() {
        return (
            <div>
                <form>
                    <div className="field">
                        <input
                            width="120px"
                            className="input"
                            type="text"
                            name="search_by_genre"
                            placeholder="Search By Genre"
                            value={this.props.input}
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>
                    <div className="control">
                        <button
                            type="submit"
                            className="button is-info"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchByGenre;