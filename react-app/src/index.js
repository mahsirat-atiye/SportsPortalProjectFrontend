import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App.js';
import Teampage from './components/Teampage'

// unused imports
/*
import App from './App';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Togglingnews from './components/Togglingnews'
import Listoftogglingnews from './components/Listoftogglingnews'
import Coachchraracteristic from './components/Coachchraracteristic'
import Listofplayers from './components/Listofplayers'
import Player from './components/Player'
import Statistics from './components/Statistics'
import Basketballplayerpage from './components/Basketballplayerpage'
import Timeline_ from './components/Timeline_'
import Videoplayer from './components/Videoplayer'
import Gamecharacteristics from './components/Gamecharacteristics'
import Comparisontable_football from './components/Comparisontable_football'
import Saved_and_main_players_table_football from './components/Saved_and_main_players_table_football'
import Basketballgamepage from './components/Basketballgamepage'
import Main from './components/Main'
import Page from './components/Page'
import Searchbox from './components/Searchbox'
import Commentbox from './components/Commentbox'
import Main_page from './components/Main_page'
*/

// ReactDOM.render(<Teampage/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();