import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import KairosTrigger from "./components/kairosTrigger";
import GoogleSignIn from "./components/googleSignIn";
import GoogleSignOut from "./components/googleSignOut";

class App extends Component {
  chartStyle = {
    height: "180px",
    width: "30%",
    margin: "auto"
  };
  render() {
    return (
      <div className="App">
        <div id="chartContainer" style={this.chartStyle} />
        <KairosTrigger />
        <GoogleSignIn />
        <GoogleSignOut />
      </div>
    );
  }
}

export default App;
