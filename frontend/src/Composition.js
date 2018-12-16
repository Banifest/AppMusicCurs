import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./components/DataProvider";
import Table from "./components/Table";
import Auth from "./components/Auth";
import Registration from "./components/Registration";
import Form from "./components/Form";
import Header from "./components/Header";

const App = () => (
    <React.Fragment>
        <Header />
    </React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;