import React, {Component} from 'react';
import {Image, Panel, Thumbnail} from "react-bootstrap";

class Box extends Component {
    render() {
        var color = "primary";
        if (this.props.c === "basketball") {
            if (this.props.d) {
                color = "danger";
            } else {
                color = "info";
            }
        } else if (this.props.d) {
            color = "warning";
        }

        return (
            <div>
                <Panel bsStyle={color} fluid>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">{this.props.a}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        {this.props.b}
                        <Thumbnail src={require("../../images/4.jpg")} responsive/>
                    </Panel.Body>
                    <Panel.Footer>نوشته‌شده توسط {this.props.f} در تایخ {this.props.e}</Panel.Footer>
                </Panel>
            </div>
        )
    }
}

export default Box;