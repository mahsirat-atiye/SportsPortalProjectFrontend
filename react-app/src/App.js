import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import Home from './routes/Home.js';
import About from './routes/About.js';
import history from './history.js';
import Header from './routes/Header.js';
import Contact from "./routes/Contact.js";
import League from "./routes/Leauge.js";
import News from "./routes/news/News.js";


class App extends Component {
    constructor(props) {
        super(props);
        this.imgUrl = "images/background.png";
    }

    render() {
        return (
            <Router history={history}>
                <div style={{backgroundImage: "url('" + require('./images/background.png') + "')",
                    backgroundRepeat: 'repeat-x repeat-y',
                    backgroundPosition: 'center',
                    minHeight: "100vh"
                    }}>

                    <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/league" component={League}/>
                    <Route path="/news" component={News}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </Router>

        );
    }
}

export default App;