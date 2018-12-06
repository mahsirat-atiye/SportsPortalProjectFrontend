import React, {Component} from 'react';
import Togglingnews from "./Togglingnews";
import {PanelGroup, ButtonGroup, Button , Table} from "react-bootstrap";
import soobasa from "./soobasa.jpg";

class Comparisontable extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            teams : [
                {
                    name:"استقلال",
                    corners:6,
                    errs:6,
                    red_cards:9,
                    yellow_cards:0,
                    goal_opportunities:8,
                    goals:8,
                    percentage_of_ball_ownership:80,
                    penalties:7
                },
                {
                    name:"پرسپولیس",
                    corners:6,
                    errs:6,
                    red_cards:9,
                    yellow_cards:0,
                    goal_opportunities:8,
                    goals:8,
                    percentage_of_ball_ownership:20,
                    penalties:7
                }
            ]

        }
    }
    render() {
        return (
            <Table responsive  striped bordered condensed hover>
                <thead>
                <tr>

                    <th>{this.state.teams[0].name}</th>
                    <th>{this.state.teams[1].name}</th>
                    <th>#</th>
                </tr>
                </thead>
                <tbody>
                <tr>

                    <td>{this.state.teams[0].goals}</td>
                    <td>{this.state.teams[1].goals}</td>
                    <td> گل ها</td>

                </tr>
                <tr>

                    <td>{this.state.teams[0].penalties}</td>
                    <td>{this.state.teams[1].penalties}</td>
                    <td>پنالتی ها</td>

                </tr>
                <tr>

                    <td>{this.state.teams[0].corners}</td>
                    <td>{this.state.teams[1].corners}</td>
                    <td>کرنرها</td>

                </tr>
                <tr>

                    <td>{this.state.teams[0].red_cards}</td>
                    <td>{this.state.teams[1].red_cards}</td>
                    <td>کارت های قرمز</td>

                </tr>
                <tr>

                    <td>{this.state.teams[0].yellow_cards}</td>
                    <td>{this.state.teams[1].yellow_cards}</td>
                    <td>کارت های زرد</td>

                </tr>
                <tr>

                    <td>{this.state.teams[0].percentage_of_ball_ownership}</td>
                    <td>{this.state.teams[1].percentage_of_ball_ownership}</td>
                    <td>درصد مالکیت توپ</td>

                </tr>
                <tr>

                    <td>{this.state.teams[0].errs}</td>
                    <td>{this.state.teams[1].errs}</td>
                    <td>خطاها</td>

                </tr>
                <tr>

                    <td>{this.state.teams[0].goal_opportunities}</td>
                    <td>{this.state.teams[1].goal_opportunities}</td>
                    <td>موقعیت های گل</td>

                </tr>

                </tbody>
            </Table>
        );
    }
}export default Comparisontable