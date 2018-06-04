import React, { Component } from "react";
// import KairosTrigger from "./components/kairosTrigger";
// import ZiggeoRecorder from "./components/ziggeoRecorder";
// import GoogleSignIn from "./components/googleSignIn";
// import GoogleSignOut from "./components/googleSignOut";
// import EmotionsChart from "./components/analytics";

import { Link, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

class App extends Component {
  render() {
    return (
      <div>
        {/* DASHBOARD NAVBAR */}
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;

/*
 <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/admin" component={VideoIndex} />


*/
