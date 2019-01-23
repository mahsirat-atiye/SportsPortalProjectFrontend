import {Component} from "react";
import React from "react";


import DataProvider from "./DataProvider";
import Page from "./Page";


export default class PageWrapper extends Component {
    render() {
        return (
            <DataProvider endpoint="api/news"
                          render={data => <Page data={data} key={1}/>}/>
        )
    }
}

