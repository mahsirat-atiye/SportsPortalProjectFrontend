import React, {Component} from 'react';
import {Carousel, Col, Row,Image,Thumbnail,Button } from "react-bootstrap";
import basket from "../images/basket.jpg"
import soobasa from "../images/soobasa.jpg"
import Grid from "react-bootstrap/es/Grid";

class main_page extends Component{


    constructor(props, context) {
        super(props, context);
        this.state={
            latest_news_football:[
                {
                    news_id:2,
                    news_title:"استقلال برد.",
                    news_image_address:{soobasa},
                },
                {
                    news_id:12,
                    news_title:"استقلال برد.",
                    news_image_address:{soobasa},
                },

            ],
            latest_news_basketball:[
                {
                    news_id:2,
                    news_title:"استقلال برد.",
                    news_image_address:{soobasa},
                },
                {
                    news_id:12,
                    news_title:"استقلال برد.",
                    news_image_address:{soobasa},
                },

            ],
            favorite_news_football:[
                {
                    news_id:2,
                    news_title:"استقلال برد.",
                    news_image_address:{soobasa},
                },
                {
                    news_id:12,
                    news_title:"استقلال برد.",
                    news_image_address:{soobasa},
                },

            ],
            favorite_news_basketball:[
                {
                    news_id:2,
                    news_title:"استقلال برد.",
                    news_image_address:{soobasa},
                },
                {
                    news_id:12,
                    news_title:"استقلال برد.",
                    news_image_address:{soobasa},
                },

            ],
            all_games:[
                {
                    imageaddresses:[{soobasa}],
                    time: "1976 Dec 17 , 13:30  ",
                    teams:[
                        {name:"استقلال"},
                        {name:"پرسپولیس"}
                    ]
                },
                {
                    time: "1976 Dec 17 , 13:30  ",
                    teams:[
                        {name:"استقلال"},
                        {name:"پرسپولیس"}
                    ]
                }
            ],

            favorite_games:[
                {
                    imageaddresses:[{soobasa}],
                    time: "1976 Dec 17 , 13:30  ",
                    teams:[
                        {name:"استقلال"},
                        {name:"پرسپولیس"}
                    ]
                },
                {
                    time: "1976 Dec 17 , 13:30  ",
                    teams:[
                        {name:"استقلال"},
                        {name:"پرسپولیس"}
                    ]
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

                        <h3>همه ی بازی ها </h3>
                        <hr/>
                        <br/>
                        <br/>
                    </Row>
                    <Row>
                        {
                            this.state.all_games.map(g =>
                                <Thumbnail src={soobasa} alt="242x200">
                                    {/*todo img addressing*/}
                                    <h3>{g.teams[0].name +" و " +g.teams[1].name}</h3>
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
                                <Thumbnail src={soobasa} alt="242x200">
                                    {/*todo img addressing*/}
                                    <h3>{g.teams[0].name +" و " +g.teams[1].name}</h3>
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

export default main_page;