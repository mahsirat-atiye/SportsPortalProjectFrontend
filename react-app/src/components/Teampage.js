import React, {Component} from 'react';
import {Carousel, Media, Col, Row, ListGroup, ListGroupItem,DropdownButton,MenuItem} from "react-bootstrap";
import soobasa from "./soobasa.jpg"
import Grid from "react-bootstrap/es/Grid";
import Footballstatistics from "./Footballstatistics";

class Teampage extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "Esteghlal",
            imageaddresses: [{soobasa}, {soobasa}, {soobasa}],

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
                            <br/>
                        </DropdownButton>
                    </Row>
                    <Row>
                        <Col xs={12} md={8}></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Teampage