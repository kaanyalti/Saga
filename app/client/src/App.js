import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  chartStyle = {
    height: "180px",
    width: "30%",
    margin: "auto"
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Chart below can be edited by handling events in the "head" of
          app/client/public/index.html
        </p>
        <div id="chartContainer" style={this.chartStyle} />
      </div>
    );
  }
}

export default App;
