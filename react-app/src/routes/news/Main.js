import React, {Component} from 'react';
import {Carousel, Col, Row,Image } from "react-bootstrap";
import basket from "../../images/basket.jpg"
import soobasa from "../../images/soobasa.jpg"
import Grid from "react-bootstrap/es/Grid";
import Videoplayer from "../../components/Videoplayer";
import Commentbox from "../../components/Commentbox";

class Main extends Component {


    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={6} md={6}>
                            <Image src={soobasa} rounded />
                            {/*todo src={this.state.imageaddresses[0}*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={6}>
                        <p>
                            {this.props.text_of_news}
                        </p>
                        </Col>

                    </Row>
                    <Row>
                        <Col xs={6} md={6}>
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
                        <Col xs={6} md={6}>
                            <br/>
                            <h3>تگ های مرتبط</h3>
                            <br/>
                            <hr/>
                        </Col>

                    </Row>
                    <Row>

                            {this.props.tags.map(s =>
                                <label style={{display:'inline_block',
                                            color:'red'
                                }}>&nbsp; &nbsp; { s } &nbsp; &nbsp;</label>
                            )}

                    </Row>

                    <Row>
                        <Col xs={6} md={6}>
                            <br/>
                            <h3>تصاویر و فیلم های مرتبط</h3>
                            <br/>
                            <hr/>
                        </Col>

                    </Row>

                    <Row>
                        <Col xs={6} md={6}>
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
                        <Col xs={6} md={6}>
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

                        {this.props.comments.map(
                            c=>
                                <Row>
                                    <div style={{
                                        background: '#ddd',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                                        display:'block',
                                    }}>
                                        {c.text}
                                    </div>
                                    <br/> <br/> <br/> <br/>
                                    <br/> <br/> <br/>


                                </Row>
                        )}


                    <Row>
                        <br/> <br/> <br/> <br/>
                        <br/> <br/> <br/>
                        <Commentbox/>
                    </Row>

                </Grid>
            </div>
        );
    }
}

export default Main