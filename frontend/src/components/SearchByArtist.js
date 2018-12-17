import React, {Component} from "react";

class SearchByArtist extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
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
                            value={this.props.input}
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>
                    <div className="control">
                        <button
                            type="button"
                            className="button is-info"
                            onClick={this.props.handleClick}
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchByArtist;