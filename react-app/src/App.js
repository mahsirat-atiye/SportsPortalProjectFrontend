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
    render() {
        return (
            <Router history={history}>
                <div>
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