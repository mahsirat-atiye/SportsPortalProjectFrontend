import React, {Component} from 'react';
import {Panel, ListGroupItem, Button, ButtonGroup} from "react-bootstrap";


class Gamecharacteristics extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <Panel>
                <Panel.Heading>
                    <b>Time : {this.props.time} </b>
                </Panel.Heading>
                <Panel.Body>
                    <ListGroupItem>Teams
                        : {" " + this.props.first_team + " VS " + this.props.second_team}</ListGroupItem>
                    <ListGroupItem>Scores
                        : {this.props.first_team + " : " + this.props.score_of_first_team + " & " + this.props.second_team + " : " + this.props.score_of_second_team}</ListGroupItem>
                    <ListGroupItem>Goals
                        : {this.props.first_team + " : " + this.props.goals_of_first_team + " & " + this.props.second_team + " : " + this.props.goals_of_second_team}</ListGroupItem>
                    <ListGroupItem>Result
                        : {this.props.first_team + " won over " + this.props.second_team}</ListGroupItem>
                    {/*TODO : if clause needed to understand from scores*/}
                    <ListGroupItem> <Button className={"btn-block btn-large btn-danger"}>More
                        Info</Button></ListGroupItem>
                </Panel.Body>
            </Panel>
        );
    }

}export default Gamecharacteristics
