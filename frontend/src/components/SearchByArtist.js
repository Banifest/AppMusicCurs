import React, {Component} from "react";
import PropTypes from "prop-types";

class SearchByArtist extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired,
        render: PropTypes.func.isRequired
    };
    state = {
        data: "",
        loaded: false,
        placeholder: "Loading..."
    };

    render() {
        const {data, loaded, placeholder} = this.state;
        return (
            <div>
                <form>
                    <div className="field">
                        <input
                            width="120px"
                            className="input"
                            type="text"
                            name="search_by_artist"
                            placeholder="Search By Artist"
                            required
                        />
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-info">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchByArtist;