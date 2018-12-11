import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import Home from './routes/Home.js';
import About from './routes/About.js';
import history from './history.js';
import Header from './routes/Header.js';
import Contact from "./routes/Contact.js";
import League from "./routes/Leauge.js";
import League_x from "./routes/League_x.js";
import News from "./routes/news/Page.js";

import test from "./routes/test.js";


class App extends Component {
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
                    <Route path="/league_x" component={League_x}/>
                    <Route path="/news" component={News}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/test" component={test}/>
                </div>
            </Router>

        );
    }
}

export default App;