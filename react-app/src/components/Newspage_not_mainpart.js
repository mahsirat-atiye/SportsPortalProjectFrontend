import React, {Component} from 'react';
import {Carousel, Col, Row, Image} from "react-bootstrap";
import basket from "./basket.jpg"
import soobasa from "./soobasa.jpg"
import Grid from "react-bootstrap/es/Grid";

class Newspage_not_mainpart extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            related_news: [
                {
                    title_: "Tilte of news1",
                    image_address: {soobasa}
                },
                {
                    title_: "Tilte of news2",
                    image_address: {soobasa}
                },
                {
                    title_: "Tilte of news3",
                    image_address: {soobasa}
                },
            ],

            latest_news: [
                {
                    title_: "Tilte of news1",
                    image_address: {soobasa}
                },
                {
                    title_: "Tilte of news2",
                    image_address: {soobasa}
                },
                {
                    title_: "Tilte of news3",
                    image_address: {soobasa}
                },
            ],
            related_teams: [
                {
                    team_id: 9,
                    team_name: "استقلال"
                },
                {
                    team_id: 19,
                    team_name: "پرسپولیس"
                },
            ],
            related_players: [
                {
                    player_id: 3,
                    player_name: "علیرضا",
                    player_familyname: "بیرانوند"
                },
                {
                    player_id: 4,
                    player_name: "علیرضا",
                    player_familyname: "بیرانوند"
                },
                {
                    player_id: 7,
                    player_name: "علیرضا",
                    player_familyname: "بیرانوند"
                },
            ]
        }


    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <br/>
                        <h3>
                            اخبار مرتبط
                        </h3>
                        
                        <hr/>
                        <br/>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            <Carousel>
                                {this.state.related_news.map(img => <Carousel.Item>
                                        <img width={300} height={300} alt="900x500" src={basket}/>
                                        {/*todo src of ...*/}

                                        <Carousel.Caption>
                                            <h3>{img.title_}</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )}


                            </Carousel>
                        </Col>
                    </Row>
                    <Row>
                        <br/>
                        <h3>
                            جدیدترین اخبار
                        </h3>
                        <hr/>
                        <br/>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            <Carousel>
                                {this.state.latest_news.map(img => <Carousel.Item>
                                        <img width={300} height={300} alt="900x500" src={basket}/>
                                        {/*todo src of ...*/}

                                        <Carousel.Caption>
                                            <h3>{img.title_}</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )}


                            </Carousel>
                        </Col>
                    </Row>
                    <Row>
                        <br/>
                        <h3>
                            تیم های مرتبط با اخبار
                        </h3>

                        <hr/>
                        <br/>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                {this.state.related_teams.map(t =>
                                        <li> {t.team_name}</li>
                                    // href needed?
                                )
                                }
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <br/>
                        <h3>
                            بازیکنان مرتبط با اخبار
                        </h3>

                        <hr/>
                        <br/>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                {this.state.related_players.map(t =>
                                        <li> {t.player_name + " " + t.player_familyname}</li>
                                    // href needed?
                                )
                                }
                            </ul>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Newspage_not_mainpart