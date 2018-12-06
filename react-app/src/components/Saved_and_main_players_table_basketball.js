import React, {Component} from 'react';

import {Table} from "react-bootstrap";
import soobasa from "./soobasa.jpg";

class Saved_and_main_players_table_basketball extends Component {

    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <Table responsive striped bordered condensed hover>
                <thead>
                <th>
                    <tr>
                        {this.props.name}
                    </tr>
                </th>
                </thead>

                <thead>
                <tr>

                    <th>تعداد ریباندها</th>
                    <th>مدت زمان بازی</th>
                    <th>تعداد پرتاب های سه امتیازی</th>
                    <th>تعداد پرتاب های دو امتیازی</th>
                    <th>بازیکنان اصلی</th>

                </tr>
                </thead>
                <tbody>
                {this.props.mainplayers.map(p =>
                    <tr>

                        <td>{p.rebounds}</td>
                        <td>{p.time_of_playing}</td>
                        <td>{p.tree_point_throws}</td>
                        <td>{p.two_point_trows}</td>
                        <td>{p.name + " "+ p.familyname}</td>
                    </tr>
                )}

                </tbody>
                <thead>
                <tr>

                    <th>تعداد ریباندها</th>
                    <th>مدت زمان بازی</th>
                    <th>تعداد پرتاب های سه امتیازی</th>
                    <th>تعداد پرتاب های دو امتیازی</th>
                    <th>بازیکنان ذخیره</th>


                </tr>
                </thead>
                <tbody>
                {this.props.savedplayers.map(p =>
                    <tr>


                        <td>{p.rebounds}</td>
                        <td>{p.time_of_playing}</td>
                        <td>{p.tree_point_throws}</td>
                        <td>{p.two_point_trows}</td>
                        <td>{p.name + " "+ p.familyname}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        );
    }
}

export default Saved_and_main_players_table_basketball