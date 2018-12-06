import React, {Component} from 'react';
import Togglingnews from "./Togglingnews";
import {PanelGroup, ButtonGroup, Button} from "react-bootstrap";
import soobasa from "./soobasa.jpg";

class Footballgamepage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state={
            imageaddresses: [{soobasa}, {soobasa}, {soobasa}],
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

        );
    }
}export default Footballgamepage