import React, { Component } from "react";
import "./App.css";
import KairosTrigger from "./components/kairosTrigger";
import ZiggeoRecorder from "./components/ziggeoRecorder";
import GoogleSignIn from "./components/googleSignIn";
import GoogleSignOut from "./components/googleSignOut";
import NavBar from "./components/NavBar.jsx";
import Graph from "./CreatorDashboard/VideoAnalytics/Graphs";
import LoginPage from "./LandingPage/text.jsx";
import SideBar from "./CreatorDashboard/sidebar.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          <SideBar />
          {/* <LoginPage /> */}
          {/* <LandingPage /> */}
          {/* <Graph title="Title given by KairosTrigger component" /> */}
          {/* <KairosTrigger /> */}
          {/* <ZiggeoRecorder /> */}
        </div>
        <footer> No right reserved </footer>
      </div>
    );
  }
}

export default App;
