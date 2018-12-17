import React, {Component} from "react";
import PropTypes from "prop-types";
import SelectionGenre from "./SelectionGenre";
import SelectionArtist from "./SelectionArtist";
import DataProvider from "../DataProvider";
import SearchByArtist from "../SearchByArtist";

class UploaderForm extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };
    state = {
        name: "",
        albums: "",
        description: "",
        file: "",
        SelectGenre: "",
        SelectArtist: ""
    };
    handleChange = event => {
        switch (event.target.name) {
            case  "name":
                this.setState({
                    name: event.target.value
                });
                break;
            case "albums":
                this.setState({
                    albums: event.target.value
                });
                break;
            case "description":
                this.setState({
                    description: event.target.value
                });
                break;
            case "file":
                this.setState({
                    file: event.target.value
                });
                break;
            case "SelectGenre":
                this.setState({
                    SelectGenre: event.target.value
                });
                break;
            case "SelectArtist":
                this.setState({
                    SelectArtist: event.target.value
                });
                break;
        }
    };

    handleSubmit = event => {
        event.preventDefault();
        const {name, albums, description, file} = this.state;
        const lead = {name, albums, description, file};
        const conf = {
            method: "post",
            body: JSON.stringify(lead),
            headers: new Headers({"Content-Type": "application/json"})
        };
        fetch(this.props.endpoint, conf).then(response => console.log(response));
    };

    render() {
        const {name, albums, description, file} = this.state;
        return (
            <div className="column">
                <form onSubmit={this.handleSubmit}>

                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={name}
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Album</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="albums"
                                onChange={this.handleChange}
                                value={albums}
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="description"
                                onChange={this.handleChange}
                                value={description}
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Genre</label>
                        <div className="control">
                            <DataProvider
                                endpoint="http://127.0.0.1:8000/api/genre/"
                                render={data => <SelectionGenre
                                    options={data}
                                    input={this.state.SelectGenre}
                                    handleChange={this.handleChange}/>}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Artist</label>
                        <div className="control">
                            <DataProvider
                                endpoint="http://127.0.0.1:8000/api/artist/"
                                render={data => <SelectionArtist
                                    options={data}
                                    input={this.state.SelectArtist}
                                    handleChange={this.handleChange}/>}/>
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">Song</label>
                        <div className="control">
                            <input
                                className="input"
                                type="file"
                                name="file"
                                onChange={this.handleChange}
                                value={file}
                                required
                            />
                        </div>
                    </div>

                    <div className="control">
                        <button type="submit" className="button is-info">
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UploaderForm;