import React, { Component } from 'react';
import {Panel} from "react-bootstrap";

class Box extends Component{
    render(){
        return(
            <div>
                <Panel bsStyle="primary" fluid>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">{this.props.a}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>{this.props.b}</Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default Box;