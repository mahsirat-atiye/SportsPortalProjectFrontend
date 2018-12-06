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

                    <td>{this.props.teams[0].score_Q4+
                    this.props.teams[0].score_Q3+
                    this.props.teams[0].score_Q2+
                    this.props.teams[0].score_Q1}</td>
                    <td>{this.props.teams[1].score_Q4+
                    this.props.teams[1].score_Q3+
                    this.props.teams[1].score_Q2+
                    this.props.teams[1].score_Q1}</td>
                    <td> مجموع امتیازها</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].score_Q1}</td>
                    <td>{this.props.teams[1].score_Q1}</td>
                    <td>امتیازهای کوارتر اول</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].score_Q2}</td>
                    <td>{this.props.teams[1].score_Q2}</td>
                    <td>امتیازهای کوارتر دوم</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].score_Q3}</td>
                    <td>{this.props.teams[1].score_Q3}</td>
                    <td>امتیازهای کوارتر سوم</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].score_Q4}</td>
                    <td>{this.props.teams[1].score_Q4}</td>
                    <td>امتیازهای کوارتر چهارم</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].three_point_throws}</td>
                    <td>{this.props.teams[1].three_point_throws}</td>
                    <td>پرتاب های سه امتیازی</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].two_point_trows}</td>
                    <td>{this.props.teams[1].two_point_trows}</td>
                    <td>پرتاب های دو امتیازی</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].errs}</td>
                    <td>{this.props.teams[1].errs}</td>
                    <td>خطاها</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].rebounds}</td>
                    <td>{this.props.teams[1].rebounds}</td>
                    <td>ریباندها</td>

                </tr>
                <tr>

                    <td>{this.props.teams[0].penalties}</td>
                    <td>{this.props.teams[1].penalties}</td>
                    <td>خطاهای پنالتی</td>

                </tr>


                </tbody>
            </Table>
        );
    }
}export default Comparisontable_football