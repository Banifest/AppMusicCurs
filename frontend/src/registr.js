import React from "react";
import ReactDOM from "react-dom";
import Auth from "./components/Auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Registration from "./components/Registration";

const App = () => (
    <React.Fragment>
        <Header headerType={1}/>
        <Registration endpoint="api/user/" />
        <Footer />
    </React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;