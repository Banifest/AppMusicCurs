import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./components/DataProvider";
import CompositionList from "./components/CompositionList";
import Header from "./components/Header";

const App = () => (
    <React.Fragment>
        <Header headerType={2} />
        <br />
        <DataProvider endpoint="http://127.0.0.1:8000/api/composition/" render={data => <CompositionList data={data}/>}/>
    </React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;