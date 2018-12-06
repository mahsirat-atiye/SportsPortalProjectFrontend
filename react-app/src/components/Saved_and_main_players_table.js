import React, {Component} from 'react';

import {Table} from "react-bootstrap";
import soobasa from "./soobasa.jpg";

class Saved_and_main_players_table extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "استقلال",
            mainplayers: [
                {name: "Ali", familyname: "Daee", time_of_change: 9},
                {name: "Alireza", familyname: "Daee", time_of_change: 9},
                {name: "Ali", familyname: "Daee", time_of_change: 9},
                {name: "Ali", familyname: "Daee", time_of_change: 19},
                {name: "Ali", familyname: "Daee", time_of_change: 9},
                {name: "Ali", familyname: "Daee", time_of_change: null},
                {name: "Ali", familyname: "Daee", time_of_change: null},
                {name: "Ali", familyname: "Daee", time_of_change: 9},
            ],
            savedplayers: [
                {name: "Ali", familyname: "Daee", time_of_change: 9},
                {name: "Alireza", familyname: "Daee", time_of_change: 9},
                {name: "Ali", familyname: "Daee", time_of_change: 9},
                {name: "Ali", familyname: "Daee", time_of_change: 19},
                {name: "Ali", familyname: "Daee", time_of_change: 9},
                {name: "Ali", familyname: "Daee", time_of_change: null},
                {name: "Ali", familyname: "Daee", time_of_change: null},
                {name: "Ali", familyname: "Daee", time_of_change: 9},
            ]
        }
    }

    render() {
        return (
            <Table responsive striped bordered condensed hover>
                <thead>
                <th>
                    {this.state.name}
                </th>
                </thead>

                <thead>
                <tr>


                    <th>زمان تعویض</th>
                    <th>بازیکنان اصلی</th>

                </tr>
                </thead>
                <tbody>
                {this.state.mainplayers.map(p =>
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
                {this.state.savedplayers.map(p =>
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

export default Saved_and_main_players_table