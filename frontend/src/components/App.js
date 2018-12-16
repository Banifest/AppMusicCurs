import React from "react";
import ReactDOM from "react-dom";
import Auth from "./Auth";
import Registration from "./Registration";
import Header from "./Header";
import Footer from "./Footer";

const App = () => (
    <React.Fragment>
        <Header />
        <Auth endpoint="api/user/login" />
        <Registration endpoint="api/user/" />
        <Footer />
    </React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;