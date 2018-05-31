import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import KairosTrigger from './components/test'

class App extends Component {
  chartStyle = {
    height: "180px",
    width: "30%",
    margin: "auto"
  };
  render() {
    return (
      <div className="App">
        <div id="chartContainer" style={this.chartStyle} ></div>
        <KairosTrigger/>
      </div>
    );
  }
}

export default App;
