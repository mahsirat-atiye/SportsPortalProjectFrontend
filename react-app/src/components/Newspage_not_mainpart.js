import React, {Component} from 'react';
import {Carousel, Col, Row, Image} from "react-bootstrap";
import basket from "./basket.jpg"
import soobasa from "./soobasa.jpg"
import Grid from "react-bootstrap/es/Grid";

class Newspage_not_mainpart extends Component {


    constructor(props, context) {
        super(props, context);



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
                        <Col  md={3}>
                            <Carousel>
                                {this.props.related_news.map(img => <Carousel.Item>
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
                        <Col  md={3}>
                            <Carousel>
                                {this.props.latest_news.map(img => <Carousel.Item>
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
                                {this.props.related_teams.map(t =>
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
                                {this.props.related_players.map(t =>
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