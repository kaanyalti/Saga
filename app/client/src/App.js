import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import KairosTrigger from "./components/kairosTrigger";
import ZiggeoRecorder from "./components/ziggeoRecorder";
import GoogleSignIn from "./components/googleSignIn";
import GoogleSignOut from "./components/googleSignOut";
import EmotionsChart from "./components/analytics";

class App extends Component {

  constructor(){
    super();
    this.state = {
      videoIDs: [],
    }
    this.addNewVideoID = this.addNewVideoID.bind(this)
  }

  addNewVideoID(newIDs) {
    this.setState((prevState) => {
      return {videoIDs: [...prevState.videoIDs, ...newIDs]};
    });
  }



  render() {
    return (
      <div className="App">
        <div id="chartContainer" style={this.chartStyle} />
        <KairosTrigger />
        <GoogleSignIn addNewVideoID={this.addNewVideoID} videoIDs={this.state.videoIDs}/>
        <GoogleSignOut />
        <KairosTrigger />
        <EmotionsChart
          title="Title given by KairosTrigger component"
        />
        <ZiggeoRecorder />
      </div>
    );
  }
}

export default App;
