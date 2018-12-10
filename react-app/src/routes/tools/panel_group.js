import React, {Component} from "react";
import {Panel, PanelGroup} from "react-bootstrap";
import Tablee from '../table/retable_filter';

export default class ControlledPanelGroup extends Component {
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
            <PanelGroup
                accordion
                id="accordion-controlled-example"
                activeKey={this.state.activeKey}
                onSelect={this.handleSelect}
            >
                <Panel eventKey="1">
                    <Panel.Heading>
                        <Panel.Title toggle>Panel heading 1</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <Tablee/>
                    </Panel.Body>
                </Panel>
                <Panel eventKey="2">
                    <Panel.Heading>
                        <Panel.Title toggle>Panel heading 2</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <Tablee/>
                    </Panel.Body>
                </Panel>
            </PanelGroup>
        );
    }
}