import React, { Component } from 'react';
import Child from "./SearchBox";
import Results from "./Results";
import axios from "axios";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    city: "",
    results: []

    }

      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
    axios.get('/api/weather?city=' + this.state.city)
     .then(response => {console.log(response.data)
   this.setState({
     results: response.data.main
   })
   console.log(this.state.results);
 })

     .catch(error => {
     }); console.log("Success, Data!!")



  }

  handleChange(e) {
    this.setState({
      city: e.target.value
    })
  }


  componentDidMount(){
    axios.get('/api/weather')
     .then(response => console.log(response))
     .catch(error => {
     });
  }

  search(value){
    this.setState({city: value})
    console.log(this.state.city);
  }



  render() {
    //console.log(this.state.city);
    return (
      <div className="App">
      <div className="header"> Weather </div>
          <Child
          city={this.state.city}
          handleChange = {this.handleChange}
          handleClick = {this.handleClick}/>
          <div className="results">
          <Results results={this.state.results} />
          </div>
      </div>
    );
  }
}

export default App;
