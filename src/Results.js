 import React, { Component } from 'react';
import "./Results.css"

class Results extends Component {
  render() {
    const {
      temp,
    } = this.props.results

    return (
      <div class="temp">
        <h1>  {temp}</h1>
      </div>
    )
  }
}

export default Results;
