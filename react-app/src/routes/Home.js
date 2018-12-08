import React, {Component} from 'react';
import {Row, Thumbnail, Button} from "react-bootstrap";
import soobasa from "../images/soobasa.jpg"
import Grid from "react-bootstrap/es/Grid";

export default class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            latest_news_football: [
                {
                    news_id: 2,
                    news_title: "استقلال برد.",
                    news_image_address: {soobasa},
                    key: 1
                },
                {
                    news_id: 12,
                    news_title: "استقلال برد.",
                    news_image_address: {soobasa},
                    key: 2
                },

            ],
            latest_news_basketball: [
                {
                    news_id: 2,
                    news_title: "استقلال برد.",
                    news_image_address: {soobasa},
                    key: 3
                },
                {
                    news_id: 12,
                    news_title: "استقلال برد.",
                    news_image_address: {soobasa},
                    key: 4
                },

            ],
            favorite_news_football: [
                {
                    news_id: 2,
                    news_title: "استقلال برد.",
                    news_image_address: {soobasa},
                    key: 5
                },
                {
                    news_id: 12,
                    news_title: "استقلال برد.",
                    news_image_address: {soobasa},
                    key: 6
                },

            ],
            favorite_news_basketball: [
                {
                    news_id: 2,
                    news_title: "استقلال برد.",
                    news_image_address: {soobasa},
                    key: 7
                },
                {
                    news_id: 12,
                    news_title: "استقلال برد.",
                    news_image_address: {soobasa},
                    key: 8
                },

            ],
            all_games: [
                {
                    imageaddresses: [{soobasa}],
                    time: "1976 Dec 17 , 13:30  ",
                    teams: [
                        {name: "استقلال"},
                        {name: "پرسپولیس"}
                    ],
                    key: 9
                },
                {
                    time: "1976 Dec 17 , 13:30  ",
                    teams: [
                        {name: "استقلال"},
                        {name: "پرسپولیس"}
                    ],
                    key: 10
                }
            ],

            favorite_games: [
                {
                    imageaddresses: [{soobasa}],
                    time: "1976 Dec 17 , 13:30  ",
                    teams: [
                        {name: "استقلال"},
                        {name: "پرسپولیس"}
                    ],
                    key: 11
                },
                {
                    time: "1976 Dec 17 , 13:30  ",
                    teams: [
                        {name: "استقلال"},
                        {name: "پرسپولیس"}
                    ],
                    key: 12
                }
            ]


        }
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <br/>
                        <h3>بازی‌ها </h3>
                        <hr/>
                        <br/>
                        <br/>
                    </Row>
                    <Row>
                        {
                            this.state.all_games.map(g =>
                                <Thumbnail src={soobasa} alt="242x200" key={g.key}>
                                    {/*todo img addressing*/}
                                    <h3>{g.teams[0].name + " و " + g.teams[1].name}</h3>
                                    <p>{g.time}</p>

                                    <Button bsStyle="danger">Like</Button>
                                    <Button bsStyle="success">More Info</Button>

                                </Thumbnail>
                            )
                        }
                    </Row>

                    <Row>
                        {
                            this.state.favorite_games.map(g =>
                                <Thumbnail src={soobasa} alt="242x200" key={g.key}>
                                    {/*todo img addressing*/}
                                    <h3>{g.teams[0].name + " و " + g.teams[1].name}</h3>
                                    <p>{g.time}</p>
                                    <p>
                                        <Button bsStyle="success">More Info</Button>
                                    </p>
                                </Thumbnail>
                            )
                        }
                    </Row>
                </Grid>
            </div>
        );
    }
}