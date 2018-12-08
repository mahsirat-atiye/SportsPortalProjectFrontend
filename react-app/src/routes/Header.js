import React, {Component} from 'react';
import persianDate from "persian-date";
import {Image, MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";


class Header extends Component {
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

    setMouseCursorPointer() {
        document.body.style.cursor = 'pointer';
    }

    setMouseCursorDefault() {
        document.body.style.cursor = 'default';
    }

    render() {
        return (
            <div className="Header" dir="rtl">
                <Navbar inverse expand="md" collapseOnSelect fluid>
                    <Nav pullRight>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">
                                    <Image className="logo" onClick={this.imageClick}
                                           onMouseEnter={this.setMouseCursorPointer}
                                           onMouseLeave={this.setMouseCursorDefault}
                                           src={require('../images/NJ.png')}
                                           alt="text"/>
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>
                    </Nav>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavDropdown eventKey={4} title="اخبار" id="basic-nav-dropdown">
                                <MenuItem style={{textAlign: "right"}} eventKey={4.1}>اخبار فوتبال</MenuItem>
                                <MenuItem style={{textAlign: "right"}} eventKey={4.2}>اخبار بسکتبال</MenuItem>
                                <MenuItem divider/>
                                <MenuItem style={{textAlign: "right"}} eventKey={4.3}>آرشیو</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={3} title="جداول لیگ‌ها" id="basic-nav-dropdown">
                                <MenuItem style={{textAlign: "right"}} eventKey={3.1}>لیگ برتر فوتبال ۱۳۹۷</MenuItem>
                                <MenuItem style={{textAlign: "right"}} eventKey={3.2}>لیگ برتر بسکتبال ۱۳۹۷</MenuItem>
                                <MenuItem divider/>
                                <MenuItem style={{textAlign: "right"}} eventKey={3.3}>لیگ‌های قدیمی فوتبال</MenuItem>
                                <MenuItem style={{textAlign: "right"}} eventKey={3.4}>لیگ‌های قدیمی بسکتبال</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={1} href="/">
                                صفحه اصلی
                            </NavItem>
                        </Nav>
                        <Nav pullLeft>
                            <Navbar.Text>
                                {this.state.date.format('dddd DD MMMM YYYY ساعت HH:mm:ss')}
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;