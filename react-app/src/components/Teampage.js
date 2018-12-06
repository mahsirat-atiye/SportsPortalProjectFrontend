import React, {Component} from 'react';
import {Carousel, Media, Col, Row, ListGroup, ListGroupItem, DropdownButton, MenuItem} from "react-bootstrap";
import soobasa from "./soobasa.jpg"
import Grid from "react-bootstrap/es/Grid";
import Footballstatistics from "./Footballstatistics";
import Gamecharacteristics from "./Gamecharacteristics";
import Coachchraracteristic from "./Coachchraracteristic";

class Teampage extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "Esteghlal",
            imageaddresses: [{soobasa}, {soobasa}, {soobasa}],
            games: [
                {
                    id: 1,
                    time: "1976 Dec 17 , 13:30  ",
                    first_team: "Esteghlal",
                    second_team: " Sepahan",
                    score_of_first_team: 6,
                    score_of_second_team: 7,
                    goals_of_first_team: 9,
                    goals_of_second_team: 0,


                },
                {
                    id: 2,
                    time: "1976 Dec 17 , 13:30  ",
                    first_team: "Esteghlal",
                    second_team: " Perspolis",
                    score_of_first_team: 6,
                    score_of_second_team: 7,
                    goals_of_first_team: 9,
                    goals_of_second_team: 0,


                },
                {
                    id: 3,
                    time: "1976 Dec 17 , 13:30  ",
                    first_team: "Esteghlal",
                    second_team: " Teractor",
                    score_of_first_team: 6,
                    score_of_second_team: 7,
                    goals_of_first_team: 9,
                    goals_of_second_team: 0,


                },
                {
                    id: 4,
                    time: "1976 Dec 17 , 13:30  ",
                    first_team: "Esteghlal",
                    second_team: " Perspolis",
                    score_of_first_team: 6,
                    score_of_second_team: 7,
                    goals_of_first_team: 9,
                    goals_of_second_team: 0,


                },
            ],
            not_main_players: [
                {
                    id: 1,
                    imageaddresses: {soobasa},
                    name: "Soobassa",
                    familyname: "Malek Zade",
                    position: "Coach",

                },
                {
                    id: 2,
                    imageaddresses: {soobasa},
                    name: "Ahmad",
                    familyname: "Malek Zade",
                    position: "Coach",

                },
                {
                    id: 3,
                    imageaddresses: {soobasa},
                    name: "Asghar",
                    familyname: "Malek Zade",
                    position: "Coach",

                },
            ]


        }
    }

    render() {
        return (
            <div>
                <marquee>
                    <h2 style={{
                        fontSize: '130px',
                        textAlign: 'center',
                        fontStyle: 'italic',
                        margin: '40px'
                    }}>{this.state.name} </h2>
                </marquee>
                <Grid>
                    <Row>

                        <Carousel>
                            {this.state.imageaddresses.map(img => <Carousel.Item>
                                    <img width={500} height={500} alt="900x500" src={soobasa}/>
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )}


                        </Carousel>

                    </Row>
                    <Row>
                        <br/>
                        <h3>
                            <b>
                                <i>
                                    Plays
                                </i>
                            </b>
                        </h3>
                        <hr/>

                        <DropdownButton title="Sort by" id="bg-nested-dropdown">
                            <MenuItem eventKey="1">Date</MenuItem>
                            <MenuItem eventKey="2">Winnig</MenuItem>
                            <MenuItem eventKey="3">Score</MenuItem>
                        </DropdownButton>
                        <br/>
                        <br/>
                    </Row>
                    <Row>
                        {
                            this.state.games.map(g => <Col xs={6} md={4}>
                                <Gamecharacteristics
                                    key={g.id}
                                    id={g.id}
                                    time={g.time}
                                    first_team={g.first_team}
                                    second_team={g.second_team}
                                    score_of_first_team={g.score_of_first_team}
                                    score_of_second_team={g.score_of_second_team}
                                    goals_of_first_team={g.goals_of_first_team}
                                    goals_of_second_team={g.goals_of_second_team}


                                />
                            </Col>)
                        }
                    </Row>
                    <Row>
                        <br/>
                        <h3>
                            <b>
                                <i>
                                    Team members
                                </i>
                            </b>
                        </h3>
                        <hr/>
                        <br/>
                    </Row>
                    <Row>
                        {
                            this.state.not_main_players.map(c => <Col xs={6} md={4}>
                                <Coachchraracteristic
                                    key={c.id}
                                    id={c.id}
                                    imageaddresses={c.imageaddresses}
                                    //because of problem in loading image i passed soobasa directly
                                    //to Characteristicplayer
                                    // TODO:
                                    // problem of loding img must be solve and Characteristicplayer : line 16 change
                                    name={c.name}
                                    familyname={c.familyname}
                                    position={c.position}
                                />
                            </Col>)
                        }
                    </Row>.
                    <Row>
                        <Col xs={12} md={8}></Col>
                        <Col xs={6} md={3}></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Teampage