import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Auth from "./Auth";
import Registration from "./Registration";
import Form from "./Form";
import Header from "./Header";

const App = () => (
    <React.Fragment>
        <Header />
        <DataProvider endpoint="api/user/" render={data => <Table data={data}/>}/>
        <DataProvider endpoint="api/composition/" render={data => <Table data={data}/>}/>
        <Auth endpoint="api/user/login" />
        <Registration endpoint="api/user/" />
    </React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;