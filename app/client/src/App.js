import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import KairosTrigger from "./components/kairosTrigger";
import EmotionsChart from "./components/analytics";

class App extends Component {
  getCoord() {
    let x = 45,
      y = 50;
    let coordinates = { x: x, y: y };
    return (coordinates = { x: x, y: y });
  }
  render() {
    return (
      <div className="App">
        <KairosTrigger />
        <EmotionsChart
          title="Title given by KairosTrigger component"
          x={this.getCoord().x}
          y={this.getCoord().y}
        />
      </div>
    );
  }
}

export default App;
