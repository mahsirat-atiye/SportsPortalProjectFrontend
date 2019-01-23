// import React, {Component} from 'react';
// import {Router, Route} from 'react-router';
// import Home from './routes/Home.js';
// import About from './routes/About.js';
// import history from './history.js';
// import Header from './routes/Header.js';
// import Team from './routes/Team.js';
// import TeamVip from "./components_/Teampage.js";
// import Contact from "./routes/Contact.js";
// import League from "./routes/Leauge.js";
// import League_x from "./routes/League_x.js";
// import News from "./routes/news/Page.js";
//
// import test from "./components_/Teampage.js";
// import Game_Info_f from "./routes/football/Game.js";
// import Game_Info_b from "./routes/basketball/Basketballgamepage.js";
// import Player_Info_f from "./routes/football/Player.js";
// import Player_Info_b from "./routes/basketball/Basketballplayerpage.js";
//
//
// class App extends Component {
//     render() {
//         return (
//             <Router history={history}>
//                 <div
//                     style={{
//                     // backgroundImage: "url('" + require('./images/background.png') + "')",
//                     // backgroundRepeat: 'repeat-x repeat-y',
//                     // backgroundPosition: 'center',
//                     // minHeight: "100vh"
//                         background: '#cce6ff',
//                         fontFamily: "B Nazanin"
//                     }}>
//
//                     <Header/>
//                     <Route exact path="/" component={Home}/>
//                     <Route path="/league" component={League}/>
//                     <Route path="/league_x" component={League_x}/>
//                     <Route path="/game_info_football" component={Game_Info_f}/>
//                     <Route path="/game_info_basketball" component={Game_Info_b}/>
//                     <Route path="/player_info_football" component={Player_Info_f}/>
//                     <Route path="/player_info_basketball" component={Player_Info_b}/>
//                     <Route path="/team_info" component={Team}/>
//                     <Route path="/team_info_vip" component={TeamVip}/>
//                     <Route path="/news" component={News}/>
//                     <Route path="/about" component={About}/>
//                     <Route path="/contact" component={Contact}/>
//                     <Route path="/test" component={test}/>
//                 </div>
//             </Router>
//
//         );
//     }
// }
//
// export default App;