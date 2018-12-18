import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UploaderForm from "./components/uploader/UploaderForm";

const App = () => (
    <React.Fragment align="center">
        <Header headerType={2}/>
        <UploaderForm endpoint="http://127.0.0.1:8000/api/composition/"/>
        <Footer/>
    </React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;