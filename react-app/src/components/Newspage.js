import React, {Component} from 'react';
import {Carousel, Media, Col, Row, ListGroup, ListGroupItem,Image } from "react-bootstrap";
import basket from "./basket.jpg"
import soobasa from "./soobasa.jpg"
import Grid from "react-bootstrap/es/Grid";
import Videoplayer from "./Videoplayer";

class Newspage extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            title_: "علی دایی کاپ قهرمانی را برد",
            date:"سه شنبه، 14 آذر ماه",
            sources:["لولو","خبرگذاری ایسنا"],
            text_of_news:"لولولولولولولولولولولو لولولولولولولولولولولو لولولولولو" +
                "لولولولولولولولولولولو لولولولولو لولولولولولولولو" +
                "لولولولولولولولولولولولولولولولولولول ولولولولولول" +
                "ولولولولولولولولولولولولولولولولولولولولولو لولولول" +
                "ولولولولولولولولول  ولولولولولولولولولولولولولولول" +
                "ولولولولولولولولولولولول ولولولولولولولولولولولو" +
                "لولولولولولولولول ولولولولولولولولولولول ولولولولولولو" +
                "لولولولولولولولولولولولو لولولولولولولولو لولولولولولولولولو",
            imageaddresses:[{soobasa},{basket},{basket},{basket}],
            video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
            tags:["tag1","tag2","tag3"]

        }
    }

    render() {
        return (
            <div>
                <h1 style={{
                    // fontSize: '130px',
                    textAlign: 'center',
                    fontStyle: 'italic',
                    margin: '40px'
                }}>{this.state.title_} </h1>
                <h3 style={{
                    // fontSize: '130px',
                    textAlign: 'center',
                    fontStyle: 'italic',
                    margin: '40px'
                }}>{this.state.date}</h3>
                {/*</marquee>*/}
                <Grid>
                    <Row>
                        <Col xs={12} md={8}>
                            <Image src={soobasa} rounded />
                            {/*todo src={this.state.imageaddresses[0}*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={8}>
                        <p>
                            {this.state.text_of_news}
                        </p>
                        </Col>

                    </Row>
                    <Row>
                        <Col xs={12} md={8}>
                            <br/>
                           <h3>منابع</h3>
                            <br/>
                            <hr/>
                        </Col>

                    </Row>
                    <Row>
                        <ul>
                            {this.state.sources.map(s =>
                            <li>{s}</li>
                            )}
                        </ul>
                    </Row>
                    <Row>
                        <Col xs={12} md={8}>
                            <br/>
                            <h3>تگ های مرتبط</h3>
                            <br/>
                            <hr/>
                        </Col>

                    </Row>
                    <Row>

                            {this.state.tags.map(s =>
                                <label style={{display:'inline_block',
                                            color:'red'
                                }}>&nbsp; &nbsp; { s } &nbsp; &nbsp;</label>
                            )}

                    </Row>

                    <Row>
                        <Col xs={12} md={8}>
                            <br/>
                            <h3>تصاویر و فیلم های مرتبط</h3>
                            <br/>
                            <hr/>
                        </Col>

                    </Row>

                    <Row>
                        <Col xs={12} md={8}>
                            <Carousel>
                                {this.state.imageaddresses.map(img => <Carousel.Item>
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
                        <Col xs={12} md={8}>
                            <br/>
                            <br/>
                            <Videoplayer
                                video={this.state.video}
                            />
                        </Col>
                        <br/>
                    </Row>

                </Grid>
            </div>
        );
    }
}

export default Newspage