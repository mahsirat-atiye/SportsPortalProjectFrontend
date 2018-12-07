import React, {Component} from 'react';
import {FormGroup,ControlLabel,FormControl,HelpBlock,Button} from "react-bootstrap";

class Commentbox extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <form>
                <br/>
                <br/>
                <label htmlFor="email"><b>لطفا نظرتان را راجع به اخبار ارائه فرمایید.</b></label>
                <input type="text" placeholder="متن را وارد کنید." name="comments" style={{
                    width:'100%',
                    height:'200px',
                    padding: '15px',
                    margin: '5px 0 22px 0',
                    display: 'inline-block',
                    border: 'none',
                    background: '#f1f1f1'
                }}/>
                <button style={{
                    background: '#4CAF50',
                    color: 'white',
                    padding: '14px 20px',
                    margin: '8px 0',
                    border: 'none',
                    cursor: 'pointer',
                    width: '100%',
                    opacity: '0.9'
                }}>ارائه نظر</button>
            </form>
        );
    }
}export default Commentbox

