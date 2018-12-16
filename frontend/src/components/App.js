import React from "react";
import ReactDOM from "react-dom";
import Auth from "./Auth";
import Header from "./Header";
import Footer from "./Footer";

const App = () => (
    <div align="center">
        <Header headerType={1}/>
        <br />
        <Auth endpoint="api/user/login" />
        <Footer />
    </div>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;