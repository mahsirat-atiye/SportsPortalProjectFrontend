import React, {Component} from 'react';
import {Carousel, Media, Col, Row, ListGroup, ListGroupItem} from "react-bootstrap";
import basket from "./basket.jpg"
import Grid from "react-bootstrap/es/Grid";
import Footballstatistics from "./Footballstatistics";
import Comparisontable_football from "./Comparisontable_football";
import Saved_and_main_players_table_football from "./Saved_and_main_players_table_football";
import Togglingnews from "./Togglingnews";
import Videoplayer from "./Videoplayer";
import Timeline_ from "./Timeline_";
import Playercharacteristics from "./Playercharacteristics";
import Comparisontable_basketball from "./Comparisontable_basketball";
import Saved_and_main_players_table_basketball from "./Saved_and_main_players_table_basketball";

class Basketballgamepage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            imageaddresses: [{basket}, {basket}, {basket}],
            video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
            text_of_report: "ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit" +
                "ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit" +
                "ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit" +
                "ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit" +
                "ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit" +
                "ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit" +
                "ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit",
            time: "1976 Dec 17 , 13:30  ",
            teams: [
                {
                    penalties: 8,
                    rebounds: 9,
                    errs: 9,
                    two_point_trows: 9,
                    three_point_throws: 9,
                    score_Q1: 1,
                    score_Q2: 2,
                    score_Q3: 3,
                    score_Q4: 4,
                    name: "Basket ball team name",
                    mainplayers: [
                        {
                            id: 1,
                            name: "احمد",
                            familyname: "احمدی",
                            rebounds: 7,
                            time_of_playing: 9,
                            three_point_throws: 5,
                            two_point_trows: 9,

                        },
                        {
                            id: 2,
                            name: "احمد",
                            familyname: "احمدی",
                            rebounds: 7,
                            time_of_playing: 9,
                            three_point_throws: 5,
                            two_point_trows: 9,

                        },
                        {
                            id: 3,
                            name: "احمد",
                            familyname: "احمدی",
                            rebounds: 7,
                            time_of_playing: 9,
                            three_point_throws: 5,
                            two_point_trows: 9,

                        },
                        {
                            id: 4,
                            name: "احمد",
                            familyname: "احمدی",
                            rebounds: 7,
                            time_of_playing: 9,
                            three_point_throws: 5,
                            two_point_trows: 9,

                        }],
                    savedplayers: [
                        {
                            id: 1,
                            name: "احمد",
                            familyname: "احمدی",
                            rebounds: 7,
                            time_of_playing: 9,
                            three_point_throws: 5,
                            two_point_trows: 9,

                        },
                        {
                            id: 2,
                            name: "احمد",
                            familyname: "احمدی",
                            rebounds: 7,
                            time_of_playing: 9,
                            three_point_throws: 5,
                            two_point_trows: 9,

                        },
                        {
                            id: 3,
                            name: "احمد",
                            familyname: "احمدی",
                            rebounds: 7,
                            time_of_playing: 9,
                            three_point_throws: 5,
                            two_point_trows: 9,

                        },
                        {
                            id: 4,
                            name: "احمد",
                            familyname: "احمدی",
                            rebounds: 7,
                            time_of_playing: 9,
                            three_point_throws: 5,
                            two_point_trows: 9,

                        },
                    ]},



                {
                            penalties: 8,
                            rebounds: 9,
                            errs: 9,
                            two_point_trows: 9,
                            three_point_throws: 9,
                            score_Q1: 1,
                            score_Q2: 2,
                            score_Q3: 3,
                            score_Q4: 4,
                            name: " other Basket ball team name",
                            mainplayers: [
                                {
                                    id: 1,
                                    name: "احمد",
                                    familyname: "احمدی",
                                    rebounds: 7,
                                    time_of_playing: 9,
                                    three_point_throws: 5,
                                    two_point_trows: 9,

                                },
                                {
                                    id: 2,
                                    name: "احمد",
                                    familyname: "احمدی",
                                    rebounds: 7,
                                    time_of_playing: 9,
                                    three_point_throws: 5,
                                    two_point_trows: 9,

                                },
                                {
                                    id: 3,
                                    name: "احمد",
                                    familyname: "احمدی",
                                    rebounds: 7,
                                    time_of_playing: 9,
                                    three_point_throws: 5,
                                    two_point_trows: 9,

                                },
                                {
                                    id: 4,
                                    name: "احمد",
                                    familyname: "احمدی",
                                    rebounds: 7,
                                    time_of_playing: 9,
                                    three_point_throws: 5,
                                    two_point_trows: 9,

                                },
                            ],
                            savedplayers: [
                                {
                                    id: 1,
                                    name: "احمد",
                                    familyname: "احمدی",
                                    rebounds: 7,
                                    time_of_playing: 9,
                                    three_point_throws: 5,
                                    two_point_trows: 9,

                                },
                                {
                                    id: 2,
                                    name: "احمد",
                                    familyname: "احمدی",
                                    rebounds: 7,
                                    time_of_playing: 9,
                                    three_point_throws: 5,
                                    two_point_trows: 9,

                                },
                                {
                                    id: 3,
                                    name: "احمد",
                                    familyname: "احمدی",
                                    rebounds: 7,
                                    time_of_playing: 9,
                                    three_point_throws: 5,
                                    two_point_trows: 9,

                                },
                                {
                                    id: 4,
                                    name: "احمد",
                                    familyname: "احمدی",
                                    rebounds: 7,
                                    time_of_playing: 9,
                                    three_point_throws: 5,
                                    two_point_trows: 9,

                                },
                            ]
                        }

                    ],
                    news_before: [
                        {
                            news: 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                            headnews: "heading of news & discription 1"
                        },
                        {
                            news: 'Nulla posuere.Donec vitae dolor.Nullam tristique diam non turpis.Cras placerat accumsan nulla.Nullam rutrum.Nam vestibulum accumsan nisl.',
                            headnews: "heading of news & discription 2"
                        },
                        {
                            news: 'ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit tempor tellus Donec pretium posuere tellus.',
                            headnews: "heading of news & discription 3"
                        },

                    ],
                    news_after: [
                        {
                            news: 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                            headnews: "heading of news & discription 1"
                        },
                        {
                            news: 'Nulla posuere.Donec vitae dolor.Nullam tristique diam non turpis.Cras placerat accumsan nulla.Nullam rutrum.Nam vestibulum accumsan nisl.',
                            headnews: "heading of news & discription 2"
                        },
                        {
                            news: 'ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit tempor tellus Donec pretium posuere tellus.',
                            headnews: "heading of news & discription 3"
                        },

                    ],
                    events: [
                        {
                            id: 1,
                            type_: "Three point throw",
                            time: 5,
                            discription: "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n" +
                                "                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n" +
                                "                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n" +
                                "                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n" +
                                "                        est.",

                        },
                        {
                            id: 1,
                            type_: "Three point throw",
                            time: 5,
                            discription: "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n" +
                                "                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n" +
                                "                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n" +
                                "                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n" +
                                "                        est.",

                        },
                        {
                            id: 1,
                            type_: "Three point throw",
                            time: 5,
                            discription: "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n" +
                                "                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n" +
                                "                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n" +
                                "                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n" +
                                "                        est.",

                        },
                    ],
                    best_playe: {
                        imageaddresses: {basket},
                        name: "سوباسابب",
                        familyname: "احمدی",
                        position: "بسکتبالیست",
                    }
                }
        }

        render()
        {
            return (
                <div>
                    {/*<marquee>*/}
                    <h1 style={{
                        // fontSize: '130px',
                        textAlign: 'center',
                        fontStyle: 'italic',
                        margin: '40px'
                    }}>{this.state.teams[0].name + " و " + this.state.teams[1].name} </h1>
                    <h3 style={{
                        // fontSize: '130px',
                        textAlign: 'center',
                        fontStyle: 'italic',
                        margin: '40px'
                    }}>{this.state.time}</h3>
                    {/*</marquee>*/}
                    <Grid>
                        <Row>
                            <Col xs={12} md={8}>
                                <Carousel>
                                    {this.state.imageaddresses.map(img => <Carousel.Item>
                                            <img width={500} height={500} alt="900x500" src={basket}/>
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
                            <br/>
                            <h3>
                                <b>
                                    <i>
                                        آمار و اطلاعات
                                    </i>
                                </b>
                            </h3>
                            <br/>
                            <hr/>
                            <br/>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                {
                                    <Comparisontable_basketball
                                        teams={this.state.teams}
                                    />
                                }

                            </Col>
                        </Row>
                        <Row>
                            {
                                this.state.teams.map(t =>
                                    <Col xs={12} md={12}>
                                        <Saved_and_main_players_table_basketball
                                            key={t.id}
                                            id={t.id}
                                            name={t.name}
                                            mainplayers={t.mainplayers}
                                            savedplayers={t.savedplayers}
                                        />
                                    </Col>
                                )
                            }
                        </Row>
                        <Row>
                            <br/>
                            <h3>
                                <b>
                                    <i>
                                        بازیکن برتر
                                    </i>
                                </b>
                            </h3>
                            <br/>
                            <hr/>
                            <br/>
                        </Row>
                        <Row>
                            <Col xs={6} md={4}>
                                <Playercharacteristics
                                    imageaddresses={this.state.best_playe.imageaddresses}
                                    name={this.state.best_playe.name}
                                    familyname={this.state.best_playe.familyname}
                                    position={this.state.best_playe.position}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <br/>
                            <h3>
                                <b>
                                    <i>
                                        بازی به روایت خط زمانی!
                                    </i>
                                </b>
                            </h3>
                            <br/>
                            <hr/>
                            <br/>
                        </Row>
                        <Row>
                            <Timeline_
                                events={this.state.events}
                            />
                        </Row>
                        <Row>
                            <br/>
                            <Togglingnews
                                heading={"گزارش متنی لحظه به لحظه بازی"}
                                textofnews={this.state.text_of_report}
                            />
                            <br/>
                        </Row>
                        <Row>
                            <br/>
                            <h3>
                                <b>
                                    <i>
                                        فیلم بازی
                                    </i>
                                </b>
                            </h3>
                            <br/>
                            <hr/>
                            <br/>
                        </Row>

                        <Row>
                            <Col xs={12} md={8}>
                                <Videoplayer
                                    video={this.state.video}
                                />
                            </Col>
                            <br/>

                        </Row>
                        <Row>
                            <br/>
                            <h3>
                                <b>
                                    <i>
                                        اخبار و پیش بینی های پیش از بازی
                                    </i>
                                </b>
                            </h3>
                            <br/>
                            <hr/>
                            <br/>
                        </Row>
                        {this.state.news_before.map(c =>
                            <Row>
                                <Media>
                                    <Media.Left align="middle">
                                        <img width={64} height={64} src={basket} alt="thumbnail"/>
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>{c.headnews}</Media.Heading>
                                        <p>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                            fringilla. Donec lacinia congue felis in faucibus.
                                        </p>

                                        <p>
                                            {c.news}
                                        </p>
                                    </Media.Body>
                                </Media>
                                <br/><br/><br/>
                            </Row>
                        )}

                        <Row>
                            <br/>
                            <h3>
                                <b>
                                    <i>
                                        اخبار داغ پس از این بازی
                                    </i>
                                </b>
                            </h3>
                            <br/>
                            <hr/>
                            <br/>
                        </Row>
                        {this.state.news_after.map(c =>
                            <Row>
                                <Media>
                                    <Media.Left align="middle">
                                        <img width={64} height={64} src={basket} alt="thumbnail"/>
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>{c.headnews}</Media.Heading>
                                        <p>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                            fringilla. Donec lacinia congue felis in faucibus.
                                        </p>

                                        <p>
                                            {c.news}
                                        </p>
                                    </Media.Body>
                                </Media>
                                <br/><br/><br/>
                            </Row>
                        )}


                    </Grid>
                </div>

            );
        }
    }

    export
    default
    Basketballgamepage