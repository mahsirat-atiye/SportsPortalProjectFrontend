import React, {Component} from 'react';
import {Link} from "react-router-dom";
import persianDate from "persian-date";
import News from "./news/News";
import {Redirect} from "react-router-dom";
import Home from "./Home";

export default class Header extends Component {
    constructor(props) {
        super(props);
        persianDate.toLocale('fa');
        this.state = {
            date: new persianDate()
        };

        this.updateClock = this.updateClock.bind(this);
        this.interval = setInterval(this.updateClock, 1000);
    }

    updateClock() {
        this.setState({
            date: new persianDate()
        });
    }

    imageClick() {
        return (
            <Redirect to='/'/>
        )
    }

    setMouseCursorPointer() {
        document.body.style.cursor = 'pointer';
    }

    setMouseCursorDefault() {
        document.body.style.cursor = 'default';
    }

    render() {
        return (
            <div className="Header">
                <ul className="menu-ul">
                    <li><img className="logo" onClick={this.imageClick} onMouseEnter={this.setMouseCursorPointer} onMouseLeave={this.setMouseCursorDefault} src={require('../images/NJ.png')}/></li>
                    <li><Link to="/">صفحه اصلی</Link></li>
                    <li><Link to="/league">جداول لیگ‌ها</Link></li>
                    <li><Link to="/news">اخبار</Link></li>
                    <li><Link to="/about">درباره ما</Link></li>
                    <li><Link to="/contact">تماس با ما</Link></li>
                    <li className="date">{this.state.date.format('dddd DD MMMM YYYY ساعت hh:mm:ss')}</li>
                </ul>

            </div>
        )
    }
}