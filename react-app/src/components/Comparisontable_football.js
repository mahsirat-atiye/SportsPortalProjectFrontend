import React, {Component} from 'react';

import { Table} from "react-bootstrap";
import soobasa from "./soobasa.jpg";

class Comparisontable_football extends Component {

    constructor(props, context) {
        super(props, context);

    }
    render() {
        return (
            <Table responsive  striped bordered condensed hover>
                <thead>
                <tr>

                    <th>{this.props.teams[0].name}</th>
                    <th>{this.props.teams[1].name}</th>
                    <th>#</th>
                </tr>
                </thead>
                <tbody>
                <tr>

                    <td>{this.props.teams[0].goals}</td>
                    <td>{this.props.teams[1].goals}</td>
                    <td> گل ها</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].penalties}</td>
                    <td>{this.props.teams[1].penalties}</td>
                    <td>پنالتی ها</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].corners}</td>
                    <td>{this.props.teams[1].corners}</td>
                    <td>کرنرها</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].red_cards}</td>
                    <td>{this.props.teams[1].red_cards}</td>
                    <td>کارت های قرمز</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].yellow_cards}</td>
                    <td>{this.props.teams[1].yellow_cards}</td>
                    <td>کارت های زرد</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].percentage_of_ball_ownership}</td>
                    <td>{this.props.teams[1].percentage_of_ball_ownership}</td>
                    <td>درصد مالکیت توپ</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].errs}</td>
                    <td>{this.props.teams[1].errs}</td>
                    <td>خطاها</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].goal_opportunities}</td>
                    <td>{this.props.teams[1].goal_opportunities}</td>
                    <td>موقعیت های گل</td>

                </tr>

                </tbody>
            </Table>
        );
    }
}export default Comparisontable_football