import React, {Component} from "react";
import ReactDOM from "react-dom";

import Table from "./components/Table";
import DataProvider from "./components/DataProvider";

class App extends Component {
    render() {
        return (
            <DataProvider endpoint="api/lead/"
                          render={data => <Table data={data}/>}/>
        )
    }
}

export default App;

