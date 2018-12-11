import React, {Component} from 'react';
import {Carousel, Col, Row} from "react-bootstrap";
import basket from "../../images/basket.jpg"
import Grid from "react-bootstrap/es/Grid";

class Extra extends Component {
    render() {
        return (
            <div>

                <Col xs={8} md={7}>
                    <h3>
                        آخرین اخبار
                    </h3>
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

                <Col xs={8} md={7}>

                    <h3>
                        مورد علاقه‌ها
                    </h3>
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

            </div>
        );
    }
}

export default Extra