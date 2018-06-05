import React, { Component } from "react";
// import KairosTrigger from "./components/kairosTrigger";
// import ZiggeoRecorder from "./components/ziggeoRecorder";
// import GoogleSignIn from "./components/googleSignIn";
// import GoogleSignOut from "./components/googleSignOut";
// import EmotionsChart from "./components/analytics";

import { Link, Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar.jsx";
import Main from "./components/Layout/Main.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
      userEmail: '',
      userFullName: '',
      videoIDs: []
    };
  }
  render() {
    return (
      <div>
        {/* DASHBOARD NAVBAR */}
        <Navbar loggedIn={this.state.loggedIn} />
        <Main loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}

export default App;
