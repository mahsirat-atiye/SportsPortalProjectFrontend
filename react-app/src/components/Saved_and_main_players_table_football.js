import React, {Component} from 'react';

import {Table} from "react-bootstrap";
import soobasa from "../images/soobasa.jpg";

class Saved_and_main_players_table_football extends Component {

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


                    <th>زمان تعویض</th>
                    <th>بازیکنان اصلی</th>

                </tr>
                </thead>
                <tbody>
                {this.props.mainplayers.map(p =>
                    <tr>


                        <td>{p.time_of_change}</td>
                        <td>{p.name + " "+ p.familyname}</td>
                    </tr>
                )}

                </tbody>
                <thead>
                <tr>

                    <th>زمان تعویض</th>
                    <th>بازیکنان ذخیره</th>


                </tr>
                </thead>
                <tbody>
                {this.props.savedplayers.map(p =>
                    <tr>


                        <td>{p.time_of_change}</td>
                        <td>{p.name + " "+ p.familyname}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        );
    }
}

export default Saved_and_main_players_table_football