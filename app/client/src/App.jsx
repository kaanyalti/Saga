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
      loggedIn: false,
      userEmail: null,
      firstName: null,
      videoData: null
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    const { userEmail, firstName, loggedIn } = this.state;
    console.log("Client has logged in");
    this.setState({
      userEmail: data.email,
      firstName: data.firstName,
      loggedIn: true,
      videoData: data.videoData
    });
  }

  render() {
    return (
      <div>
        <Navbar loggedIn={this.state.loggedIn} />
        <Main
          loggedIn={this.state.loggedIn}
          videoData={this.state.videoData}
          handleLogin={this.handleLogin}
        />
      </div>
    );
  }
}

export default App;
