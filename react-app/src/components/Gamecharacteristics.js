import React, {Component} from 'react';
import {Panel, ListGroupItem, Button, ButtonGroup} from "react-bootstrap";


class Gamecharacteristics extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            time: "1976 Dec 17 , 13:30  ",
            first_team: "Esteghlal",
            second_team: " Perspolis",
            score_of_first_team: 6,
            score_of_second_team: 7,
            goals_of_first_team: 9,
            goals_of_second_team: 0,


        }

    }

    render() {
        return (
            <Panel>
                <Panel.Heading>
                    <b>Time : {this.state.time} </b>
                </Panel.Heading>
                <Panel.Body>
                    <ListGroupItem>Teams
                        : {" " + this.state.first_team + " VS " + this.state.second_team}</ListGroupItem>
                    <ListGroupItem>Scores
                        : {this.state.first_team + " : " + this.state.score_of_first_team + " & " + this.state.second_team + " : " + this.state.score_of_second_team}</ListGroupItem>
                    <ListGroupItem>Goals
                        : {this.state.first_team + " : " + this.state.goals_of_first_team + " & " + this.state.second_team + " : " + this.state.goals_of_second_team}</ListGroupItem>
                    <ListGroupItem>Result
                        : {this.state.first_team + " won over " + this.state.second_team}</ListGroupItem>
                    {/*TODO : if clause needed to understand from scores*/}
                    <ListGroupItem> <Button className={"btn-block btn-large btn-danger"}>More
                        Info</Button></ListGroupItem>
                </Panel.Body>
            </Panel>
        );
    }

}export default Gamecharacteristics
