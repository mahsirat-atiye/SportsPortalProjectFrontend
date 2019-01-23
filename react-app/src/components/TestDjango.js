import {Component} from "react";
import React from "react";
import DataProvider from "./DataProvider";
import Table from "./Table";

class TestDjango extends Component {
    render() {
        return (
            <DataProvider endpoint="api/lead/"
                          render={data => <Table data={data} key={1}/>}/>
        )
    }
}

export default TestDjango;
