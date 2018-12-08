import React, { Component } from 'react';
import {Panel} from "react-bootstrap";

class Toggle extends Component{
    render(){
        return(
            <Panel eventKey="1">
                <Panel.Heading>
                    <Panel.Title toggle>{this.props.heading}</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    {this.props.textofnews}
                </Panel.Body>
            </Panel>
        )
    }
}

export default Toggle;