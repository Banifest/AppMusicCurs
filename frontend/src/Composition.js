import React from "react";
import ReactDOM from "react-dom";
import CompositionList from "./components/CompositionList";
import Header from "./components/Header";
import SearchByArtist from "./components/SearchByArtist";
import SearchByGenre from "./components/SearchByGenre";

var urlParams;
(window.onpopstate = function () {
    let match,
        pl = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) {
            return decodeURIComponent(s.replace(pl, " "));
        },
        query = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
})();


class App extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading...",
            state: "http://127.0.0.1:8000/",
            filterType: 1,
            artist_name: "",
            genre_name: ""
        };
        console.log(urlParams);
        if (urlParams["search_by_artist"] !== undefined) {
            this.state.artist_name = urlParams["search_by_artist"];
        }
        if (urlParams["search_by_genre"] !== undefined) {
            this.state.genre_name = urlParams["search_by_genre"];
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        console.log(this.props)
    }


    handleChange(event) {
        switch (event.target.name) {
            case "search_by_artist":
                this.setState({
                    artist_name: event.target.value
                });
                break;
            case "search_by_genre":
                this.setState({
                    genre_name: event.target.value
                });
                break;
        }
    }

    handleClick(event) {
        if (this.state.artist_name !== "") {
            fetch("http://127.0.0.1:8000/api/artist/composition_name/?search_by_artist=" + this.state.artist_name)
                .then(response =>
                {
                    if (response.status !== 200) {
                        return this.setState({placeholder: "Something went wrong"});
                    }
                    return response.json();
                })
                .then(data => this.setState({data: data, loaded: true}));
            this.state.artist_name = "";
        } else if (this.state.genre_name !== "") {
            fetch("http://127.0.0.1:8000/api/genre/composition_name/?search_by_genre=" + this.state.genre_name)
                .then(response =>
                {
                    if (response.status !== 200) {
                        return this.setState({placeholder: "Something went wrong"});
                    }
                    return response.json();
                })
                .then(data => this.setState({data: data, loaded: true}));
            this.state.genre_name = "";
        }
    }

    componentWillMount() {
        if (urlParams["search_by_artist"] !== undefined) {
            this.state.name = urlParams["search_by_artist"];
            fetch("http://127.0.0.1:8000/api/artist/composition_name/?search_by_artist=" + this.state.artist_name)
                .then(response => {
                    if (response.status !== 200) {
                        return this.setState({placeholder: "Something went wrong"});
                    }
                    return response.json();
                })
                .then(data => this.setState({data: data, loaded: true}));
        } else if (urlParams["search_by_genre"] !== undefined) {
            this.state.name = urlParams["search_by_artist"];
            fetch("http://127.0.0.1:8000/api/genre/composition_name/?search_by_genre=" + this.state.genre_name)
                .then(response => {
                    if (response.status !== 200) {
                        return this.setState({placeholder: "Something went wrong"});
                    }
                    return response.json();
                })
                .then(data => this.setState({data: data, loaded: true}));
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header headerType={2}/>
                <br/>
                <CompositionList data={this.state.data}/>
                <SearchByArtist handleChange={this.handleChange} handleClick={this.handleClick}/>
                <SearchByGenre handleChange={this.handleChange} handleClick={this.handleClick}/>
            </React.Fragment>
        );
    }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;