import React, {Component} from "react";
import PropTypes from "prop-types";
import key from "weak-key";
import Table from "./Table";

class Table_ extends Component {
    render() {
                 return (
            !this.props.data.length ? (
                <p>Nothing to show</p>
            ) : (
                <div className="column">
                    <h2 className="subtitle">
                        Showing <strong>{this.props.data.length} items</strong>
                    </h2>
                    <table className="table is-striped">
                        <thead>
                        <tr>
                            {Object.entries(this.props.data[0]).filter(el => el[0]==="email").map(el => <th key={key(el)}>{el[0]}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.data.map(el => (
                            <tr key={el.id}>
                                {Object.entries(el).filter(el => el[0]==="email").map(el => <td key={key(el)}>{el[1]}</td>)}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )


        )
    }



}

export default Table_;