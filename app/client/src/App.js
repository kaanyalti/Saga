import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import KairosTrigger from "./components/kairosTrigger";
import EmotionsChart from "./components/analytics";

class App extends Component {
  render() {
    return (
      <div className="App">
        <KairosTrigger />
        <EmotionsChart title="title from App.js props" x="40" y="65" />
      </div>
    );
  }
}

export default App;
