import React, {Component} from 'react';
import {Carousel, Col, Row,Image } from "react-bootstrap";
import basket from "../../images/basket.jpg"
import soobasa from "../../images/soobasa.jpg"
import Grid from "react-bootstrap/es/Grid";
import Videoplayer from "../tools/VideoPlayer";
import Commentbox from "../../components/Commentbox";
import Extra from "./Extra";
import {Box} from "reflexbox";

class Main extends Component {


    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={6} md={8}>
                            <Image src={soobasa} width={400} height={400} rounded />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={8}>
                        <p>
                            {this.props.text_of_news}
                        </p>
                        </Col>

                    </Row>
                    <Row>
                        <Col >
                            <br/>
                           <h3>منابع</h3>
                            <br/>
                            <hr/>
                        </Col>

                    </Row>
                    <Row>
                        <ul>
                            {this.props.sources.map(s =>
                            <li>{s}</li>
                            )}
                        </ul>
                    </Row>
                    <Row>
                        <Col >
                            <br/>
                            <h3>تگ های مرتبط</h3>
                            <br/>
                            <hr/>
                        </Col>

                    </Row>
                    <Row>

                            {this.props.tags.map(s =>
                                <label style={{display:'inline_block',
                                            color:'orange'
                                }}>&nbsp; &nbsp; { s } &nbsp; &nbsp;</label>
                            )}

                    </Row>

                    <Row>
                        <Col >
                            <br/>
                            <h3>تصاویر و فیلم های مرتبط</h3>
                            <br/>
                            <hr/>
                        </Col>

                    </Row>

                    <Row>
                        <Col xs={8} md={10} >
                            <Carousel>
                                {this.props.imageaddresses.map(img => <Carousel.Item>
                                        <img width={500} height={500} alt="900x500" src={basket}/>
                                    {/*todo src of ...*/}

                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )}


                            </Carousel>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={8} md={10} >
                            <br/>
                            <br/>
                            <Videoplayer
                                video={this.props.video}
                            />
                        </Col>
                        <br/>
                        <br/> <br/> <br/>
                        <br/> <br/> <br/>
                        <br/> <br/> <br/>
                    </Row>
                    <Row>
                        <Col xs={8} md={10} >
                            <br/>
                            <br/> <br/> <br/>
                            <br/> <br/> <br/>
                            <br/> <br/> <br/>
                        </Col>
                    </Row>

                        {this.props.comments.map(
                            c=>
                                <Row>
                                    <Col xs={6} md={6}>
                                    <div style={{
                                        background: '#ddd',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                                        display:'block',
                                    }}>
                                        {c.text}
                                    </div>
                                    <br/>

                                    </Col>
                                </Row>
                        )}


                    <Row>
                        <Col xs={6} md={6}>
                        <br/> <br/> <br/> <br/>
                        <br/> <br/> <br/>
                        <Commentbox/>
                        </Col>
                        <Col>
                            <h3>
                                تیم های مرتبط با اخبار
                            </h3>
                            <ul>
                                {this.props.related_teams.map(t =>
                                        <li> {t.team_name}</li>
                                    // href needed?
                                )
                                }
                            </ul>
                            <br/>
                            <h3>
                                بازیکنان مرتبط با اخبار
                            </h3>
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

export default Main