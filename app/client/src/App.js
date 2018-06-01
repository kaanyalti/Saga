import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import EmotionsChart from "./components/analytics";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Chart below can be edited by handling events in the form creation
          srcipt
        </p>
      </div>
    );
  }
}

export default App;
