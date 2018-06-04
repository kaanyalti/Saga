import React, { Component } from "react";
import "./App.css";
import KairosTrigger from "./components/kairosTrigger";
import ZiggeoRecorder from "./components/ziggeoRecorder";
import GoogleSignIn from "./components/googleSignIn";
import GoogleSignOut from "./components/googleSignOut";
import Navbar from "./components/NavBar.jsx";
import Graph from "./CreatorDashboard/VideoAnalytics/Graphs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="Chart">
          <Graph title="Title given by KairosTrigger component" />
        </div>
        <KairosTrigger />
        <ZiggeoRecorder />
      </div>
    );
  }
}

export default App;
