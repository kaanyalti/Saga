import React, { Component } from "react";
import "./App.css";
import KairosTrigger from "./components/kairosTrigger";
import ZiggeoRecorder from "./components/ziggeoRecorder";
import GoogleSignIn from "./components/googleSignIn";
import GoogleSignOut from "./components/googleSignOut";
import Navbar from "./components/NavBar.jsx";
import Graph from "./CreatorDashboard/VideoAnalytics/Graphs";
import LandingPage from "./LandingPage/text.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
        {/* <Graph title="Title given by KairosTrigger component" /> */}
        {/* <KairosTrigger /> */}
        {/* <ZiggeoRecorder /> */}
      </div>
    );
  }
}

export default App;
