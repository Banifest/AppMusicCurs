import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import SelectionGenre from "./components/uploader/SelectionGenre";
import SelectionArtist from "./components/uploader/SelectionArtist";

const App = () => (
    <React.Fragment align="center">
        <Header headerType={2}/>
        <SelectionGenre />
        <SelectionArtist />
        <Footer/>
    </React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;