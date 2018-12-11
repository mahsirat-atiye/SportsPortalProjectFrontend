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
                    <Panel.Heading style={{textAlign: 'center'}}>
                        <Panel.Title componentClass="h3">{this.props.a}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body style={{textAlign: 'center'}}>
                        {this.props.b}
                        <form action="/game_info"><button style={{
                            background: '#4CAF50',
                            float: 'left',
                            color: 'white',
                            padding: '0px 0px',
                            margin: '1px 0',
                            border: 'none',
                            cursor: 'pointer',
                            width: '40%',
                            opacity: '0.9'
                        }}>اطلاعات بیشتر</button></form>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default Box;