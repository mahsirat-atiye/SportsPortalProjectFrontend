import React, {Component} from 'react';

class Commentbox extends Component {

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

