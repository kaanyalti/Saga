import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import KairosTrigger from "./components/kairosTrigger";
import ZiggeoRecorder from "./components/ziggeoRecorder";
import GoogleSignIn from "./components/googleSignIn";
import GoogleSignOut from "./components/googleSignOut";
import EmotionsChart from "./components/analytics";
import { Link, Route, Switch } from 'react-router-dom';

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/* Login component */
const Login = () => (
  <div>
    <h2>Login</h2>
  </div>
)

class App extends Component {
  getCoord() {
    let x = 45,
      y = 50;
    let coordinates = { x: x, y: y };
    return (coordinates = { x: x, y: y });
  }
  render() {
    return (
      <div>
    {/* HOME NAVBAR */}
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
         </nav>

    {/* DASHBOARD NAVBAR */}

        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
         </nav>

           <Route exact path="/" component={Home}/>
           <Route path="/login" component={Login}/>
      </div>
    );
  }
}

export default App;

/*

  <div id="chartContainer" style={this.chartStyle} />
        <GoogleSignIn />
        <GoogleSignOut />
        <KairosTrigger />
        <EmotionsChart
          title="Title given by KairosTrigger component"
          x={this.getCoord().x}
          y={this.getCoord().y}
        />
        <ZiggeoRecorder />

*/