import React, {Component} from 'react';
import {Thumbnail, Button, Col,ListGroupItem} from "react-bootstrap";
import soobasa from "../images/soobasa.jpg"
import ListGroup from "react-bootstrap/es/ListGroup";

class Playercharacteristics extends Component {

    constructor(props, context) {
        super(props, context);


    }

    render() {
        return (
            <Thumbnail src={soobasa} alt="242x200">
                {/*this.props.imageaddresses should be replace with soobasa*/}

                <h3>{this.props.name + " " + this.props.familyname}</h3>
                <p>{this.props.position}</p>
                <p>
                    <Button className={"btn-block btn-large btn-danger"}>Like</Button>
                    <Button className={"btn-block btn-large btn-success"}>More Info</Button>
                </p>
            </Thumbnail>
        )
    }

}

export default Playercharacteristics