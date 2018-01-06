import React, { Component } from 'react';
import "./Results.css"

class Results extends Component {

  render() {
    let rounded = Math.round(this.props.results.temp);


    return (
      <div className="temp">
        <p> The Current Temperature: {rounded} </p>
        <p> The Current Pressure: {this.props.results.pressure} </p>
        <p> The Current Humidity: {this.props.results.humidity} </p>
      </div>
    )
  }
}

export default Results;
