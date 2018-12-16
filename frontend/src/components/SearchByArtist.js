import React, {Component} from "react";
import PropTypes from "prop-types";

class SearchByArtist extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        // this.state = {
        //     data: "",
        //     loaded: false,
        //     placeholder: "Loading...",
        //     name: ""
        // };
    }

    // handleChange(event) {
    //     this.setState({
    //         inputValue: event.target.value
    //     });
    // }

    // handleChange(event) {
    //     switch (event.target.name) {
    //         case  "search_by_artist":
    //             this.setState({
    //                 name: event.target.value
    //             });
    //             break;
    //     }
    // };

    handleSubmit = e => {
        e.preventDefault();
        const {name} = this.state;
        const lead = {name};
        const conf = {
            method: "get",
        };
        fetch("http://127.0.0.1:8000/api/artist/composition_name/?search_by_artist=" + this.state.name, conf)
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