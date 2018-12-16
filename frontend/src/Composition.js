import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./components/DataProvider";
import CompositionList from "./components/CompositionList";
import Header from "./components/Header";
import SearchByArtist from "./components/SearchByArtist";
import CompProvider from "./components/CompProvider";

let urlParams;
(window.onpopstate = function () {
    let match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

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
            name: ""
        };
        if (urlParams["search_by_artist"] !== undefined)
        {
            this.state.name = urlParams["search_by_artist"];
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        console.log(this.props)
    }
    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleClick(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    componentWillMount() {
        if (this.state.endpoint !== undefined &&
            this.state.endpoint.startsWith("http://127.0.0.1:8000/composition/?search_by_artist")) {
            fetch("http://127.0.0.1:8000/api/artist/composition_name/?search_by_artist=Test")
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
                <DataProvider endpoint="http://127.0.0.1:8000/api/composition/"
                              render={data => <CompositionList data={data}/>}/>
                <DataProvider
                    endpoint={ urlParams["search_by_artist"] !== undefined ?
                        "http://127.0.0.1:8000/api/artist/composition_name/" :
                        "http://127.0.0.1:8000/api/artist/composition_name/?search_by_artist="+this.state.name
                    }
                    render={data => <CompositionList data={data}/>}/>
                <SearchByArtist handleChange={this.handleChange} handleClick={this.handleClick}/>
            </React.Fragment>
        );
    }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;