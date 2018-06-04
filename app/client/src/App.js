import React, { Component } from "react";
import "./App.css";
import KairosTrigger from "./components/kairosTrigger";
import ZiggeoRecorder from "./components/ziggeoRecorder";
import GoogleSignIn from "./components/googleSignIn";
import GoogleSignOut from "./components/googleSignOut";
import EmotionsChart from "./components/analytics";
import Navbar from "./components/NavBar.jsx";

// class App extends Component {
// import Component from './Dashboard/nameOfComponent.jsx'
//   render() {
//     return (
//       <Component />
//     )
//   }
// }
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="google-buttons">
          <GoogleSignIn />
          <GoogleSignOut />
        </div>
        <div className="Chart">
          <EmotionsChart title="Title given by KairosTrigger component" />
        </div>
        <KairosTrigger />
        <ZiggeoRecorder />
      </div>
    );
  }
}

export default App;
