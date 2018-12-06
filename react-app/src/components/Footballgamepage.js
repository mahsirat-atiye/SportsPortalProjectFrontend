import React, {Component} from 'react';
import {Carousel, Media, Col, Row, ListGroup, ListGroupItem} from "react-bootstrap";
import soobasa from "./soobasa.jpg"
import Grid from "react-bootstrap/es/Grid";
import Footballstatistics from "./Footballstatistics";
import Comparisontable from "./Comparisontable";
import Saved_and_main_players_table from "./Saved_and_main_players_table";
import Togglingnews from "./Togglingnews";
import Videoplayer from "./Videoplayer";
import Timeline_ from "./Timeline_";
import Playercharacteristics from "./Playercharacteristics";

class Footballgamepage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state={
            imageaddresses: [{soobasa}, {soobasa}, {soobasa}],
            video:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
            text_of_report:"ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit" +
                "ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit" +
                "ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit" +
                "ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit" +
                "ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit" +
                "ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit" +
                "ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit",
            time: "1976 Dec 17 , 13:30  ",
            teams:[
                {
                    id:1,
                    name:"استقلال",
                    corners:6,
                    errs:6,
                    red_cards:9,
                    yellow_cards:0,
                    goal_opportunities:8,
                    goals:8,
                    percentage_of_ball_ownership:80,
                    penalties:7,
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
                },
                {
                    id:2,
                    name:"پرسپولیس",
                    corners:6,
                    errs:6,
                    red_cards:9,
                    yellow_cards:0,
                    goal_opportunities:8,
                    goals:8,
                    percentage_of_ball_ownership:80,
                    penalties:7,
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
            events : [
                {
                    id:1,
                    type_: "Goal",
                    time:5,
                    discription:"Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n" +
                        "                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n" +
                        "                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n" +
                        "                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n" +
                        "                        est.",

                },
                {
                    id:1,
                    type_: "Goal",
                    time:5,
                    discription:"Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n" +
                        "                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n" +
                        "                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n" +
                        "                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n" +
                        "                        est.",

                },
                {
                    id:1,
                    type_: "Goal",
                    time:5,
                    discription:"Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n" +
                        "                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n" +
                        "                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n" +
                        "                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n" +
                        "                        est.",

                },
            ],
            best_playe:{
                imageaddresses:{soobasa},
                name:"سوباسا",
                familyname:"احمدی",
                position:"دروازه بان",
            }
        }
    }
    render() {
        return (
            <div>
                {/*<marquee>*/}
                <h1 style={{
                    // fontSize: '130px',
                    textAlign: 'center',
                    fontStyle: 'italic',
                    margin: '40px'
                }}>{this.state.teams[0].name + " و "+ this.state.teams[1].name} </h1>
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
                                        <img width={500} height={500} alt="900x500" src={soobasa}/>
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
                        <Col xs={12} md={8}>
                            {
                                <Comparisontable
                                teams = {this.state.teams}
                                />
                            }

                        </Col>
                    </Row>
                    <Row>
                        {
                            this.state.teams.map(t =>
                                <Col xs={6} md={6}>
                                    <Saved_and_main_players_table
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
                            heading = {"گزارش متنی لحظه به لحظه بازی"}
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
                                    اخبار و پیش بینی های پس از بازی
                                </i>
                            </b>
                        </h3>
                        <br/>
                        <hr/>
                        <br/>
                    </Row>
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

                </Grid>
            </div>

        );
    }
}export default Footballgamepage