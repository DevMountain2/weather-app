import React, { Component } from 'react';

class SearchBox extends Component {
  handleKeyPress(target) {
  if(target.charCode==13){

  }

}


  render() {
      //console.log(this.props.city);
    return (
      <div>
        <input type="text" onKeyPress={this.handleKeyPress}

        onChange={this.props.handleChange} />
        <button className="btn btn-primary" onClick={this.props.handleClick}> Search </button>


      </div>
    )
  }
}

export default SearchBox;
