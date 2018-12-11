import React, {Component} from 'react';
import Tablee from './table/table_league.js';
import {Panel, PanelGroup} from "react-bootstrap";
import SearchBox from '../components/Searchbox.js';

export default class Leauge extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            activeKey: '1'
        };
    }

    handleSelect(activeKey) {
        this.setState({activeKey});
    }

    render() {
        return (
            <div>
                <PanelGroup
                    accordion
                    id="accordion-controlled-example"
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                >
                    <Panel eventKey="1">
                        <Panel.Heading>
                            <Panel.Title toggle>لیگ جدید</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                            <Tablee/>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                        <Panel.Heading>
                            <Panel.Title toggle>لیگ قدیمی</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                            <Tablee/>
                        </Panel.Body>
                    </Panel>
                    <SearchBox/>
                    <Panel eventKey="0">
                        <Panel.Heading>
                            <Panel.Title toggle>جستجو</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                            <Tablee/>
                        </Panel.Body>
                    </Panel>

                </PanelGroup>
            </div>


        );
    }
}
