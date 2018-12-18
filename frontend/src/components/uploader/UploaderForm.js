import React, {Component} from "react";
import PropTypes from "prop-types";
import SelectionGenre from "./SelectionGenre";
import SelectionArtist from "./SelectionArtist";
import DataProvider from "../DataProvider";
import SearchByArtist from "../SearchByArtist";

function dataUriToBlob(dataUri) {
    const binary = atob(dataUri.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) array.push(binary.charCodeAt(i));
    return new Blob([new Uint8Array(array)], {type: 'audio/mp3'});
}

function imageToFormData(audio, fieldName = 'composition_url') {
    const formData = new FormData();
    formData.append(fieldName, dataUriToBlob(audio));
    return formData;
}

class UploaderForm extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.inpuElement = null;
    }

    state = {
        name: "",
        albums: "",
        description: "",
        composition_url: "",
        genre: "",
        artist: "",
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
            case "composition_url":
                this.setState({
                    composition_url: event.target.files[0]
                });
                break;
            case "SelectGenre":
                this.setState({
                    genre: event.target.value
                });
                break;
            case "SelectArtist":
                this.setState({
                    artist: event.target.value
                });
                break;
        }
    };

    handleSubmit = event => {
        event.preventDefault();

        const data = new FormData();
        console.log(this.state.composition_url);
        data.append("composition_url", this.state.composition_url, this.state.composition_url.name);
        data.append("name", this.state.name);
        data.append("albums", this.state.albums);
        data.append("description", this.state.description);
        data.append("artist", this.state.artist);
        data.append("genre", this.state.genre);

        console.log(data);

        fetch(this.props.endpoint,
            {
                method: 'POST',
                body: data,
                mimeType: "multipart/form-data",
            }).then(response => console.log(response));

        // const {name, albums, description, composition_url, genre, artist} = this.state;
        // const lead = {name, albums, description, composition_url, genre, artist};
        // const conf = {
        //     method: "post",
        //     body: JSON.stringify(lead),
        //     headers: {
        //         'content-type': 'application/x-www-form-urlencoded',
        //     },
        // };
        // fetch(this.props.endpoint, conf).then(response => console.log(response));
    };

    render() {
        const {name, albums, description, file, genre, artist} = this.state;
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
                                    input={this.state.genre}
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
                                    input={this.state.artist}
                                    handleChange={this.handleChange}/>}/>
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">Song</label>
                        <div className="control">
                            <input
                                className="input"
                                accept=".mp3"
                                type="file"
                                name="composition_url"
                                onChange={this.handleChange}
                                multiple={false}
                                value={file}
                                required
                            />
                        </div>
                    </div>

                    <div className="control" align="center">
                        <button type="submit" className="button is-info">
                            Add song!
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UploaderForm;